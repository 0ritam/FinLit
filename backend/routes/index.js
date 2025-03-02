const express = require("express");
const multer = require("multer");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const UserRoute = require("./user");
const moduleRoute = require("./module");
const contentRoute = require("./content");

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, "uploads/") });

router.get("/", (req, res) => {
    res.json("On /v1");
});

router.use("/user", UserRoute);
router.use("/module", moduleRoute);
router.use("/:moduleId/content", contentRoute);

// 🔹 Fraud Detection Endpoint
router.post("/fraud-detection", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = path.resolve(req.file.path);
    const pythonScriptPath = path.resolve(__dirname, "../../ml/bank-transaction-eda-for-fraud-detection.py");

    console.log(`🚀 Running fraud detection on file: ${filePath}`);
    console.log(pythonScriptPath)
    // Ensure Python script exists before execution
    if (!fs.existsSync(pythonScriptPath)) {
        console.error("❌ Python script not found at:", pythonScriptPath);
        return res.status(500).json({ error: "Fraud detection script not found" });
    }

    // 🔹 Spawn Python Process
    const pythonProcess = spawn("python", [pythonScriptPath, filePath]);

    let resultData = "";
    let errorData = "";

    // Capture STDOUT (Python Output)
    pythonProcess.stdout.on("data", (data) => {
        resultData += data.toString();
    });

    // Capture STDERR (Python Errors)
    pythonProcess.stderr.on("data", (data) => {
        errorData += data.toString();
    });

    // Handle Python Script Completion
    pythonProcess.on("close", (code) => {
        console.log(`✅ Python script exited with code: ${code}`);

        // 🔹 Cleanup uploaded file
        try {
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                console.log(`🗑️ File deleted: ${filePath}`);
            }
        } catch (err) {
            console.error("⚠️ Error deleting file:", err);
        }

        if (code === 0) {
            try {
                const jsonOutput = resultData.trim();
                console.log("🔍 Python Output:", jsonOutput);

                if (jsonOutput.startsWith("{") || jsonOutput.startsWith("[")) {
                    res.json(JSON.parse(jsonOutput)); // ✅ Parse JSON response
                } else {
                    res.status(500).json({ error: "Invalid JSON response from Python script", details: jsonOutput });
                }
            } catch (error) {
                res.status(500).json({ error: "Failed to parse JSON output", details: resultData });
            }
        } else {
            console.error("❌ Python script error:", errorData);
            res.status(500).json({ error: "Python script execution failed", details: errorData });
        }
    });
});

module.exports = router;
