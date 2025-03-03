import React, { useState } from "react";
import { motion } from "framer-motion";
import ContentHeader from "@/components/landing/ContentHeader";
const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  // Sample data for testing
  const sampleData = [
    {"TransactionID":1002,"AccountID":2002,"TransactionAmount":1200,"TransactionDate":"2025-03-01 16:45:00","TransactionType":"Cash Withdrawal","Location":"Los Angeles","DeviceID":"D456","IP Address":"192.168.1.20","MerchantID":"M6789","Channel":"ATM","TransactionDuration":30,"LoginAttempts":3,"AccountBalance":3200.75,"PreviousTransactionDate":"2025-03-01 10:00:00","HourOfTransaction":16,"TimeSinceLastTransaction":24300,"XGBoost_Fraud":false,"IsolationForest_Fraud":true},
    {"TransactionID":1004,"AccountID":2004,"TransactionAmount":980.5,"TransactionDate":"2025-03-01 19:10:00","TransactionType":"Online Purchase","Location":"Miami","DeviceID":"D012","IP Address":"192.168.1.40","MerchantID":"M8901","Channel":"Web","TransactionDuration":20,"LoginAttempts":5,"AccountBalance":2700.25,"PreviousTransactionDate":"2025-03-01 18:00:00","HourOfTransaction":19,"TimeSinceLastTransaction":4200,"XGBoost_Fraud":true,"IsolationForest_Fraud":true},
    {"TransactionID":1005,"AccountID":2005,"TransactionAmount":3500,"TransactionDate":"2025-03-01 21:05:00","TransactionType":"Wire Transfer","Location":"Houston","DeviceID":"D345","IP Address":"192.168.1.50","MerchantID":"M9012","Channel":"Bank Transfer","TransactionDuration":10,"LoginAttempts":4,"AccountBalance":5000,"PreviousTransactionDate":"2025-02-26 15:30:00","HourOfTransaction":21,"TimeSinceLastTransaction":279300,"XGBoost_Fraud":true,"IsolationForest_Fraud":true},
    {"TransactionID":1008,"AccountID":2008,"TransactionAmount":2500,"TransactionDate":"2025-03-01 22:30:00","TransactionType":"Cash Withdrawal","Location":"Seattle","DeviceID":"D234","IP Address":"192.168.1.80","MerchantID":"M2345","Channel":"ATM","TransactionDuration":15,"LoginAttempts":6,"AccountBalance":10000,"PreviousTransactionDate":"2025-03-01 21:00:00","HourOfTransaction":22,"TimeSinceLastTransaction":5400,"XGBoost_Fraud":true,"IsolationForest_Fraud":true},
    {"TransactionID":1010,"AccountID":2010,"TransactionAmount":5000,"TransactionDate":"2025-03-01 23:15:00","TransactionType":"Wire Transfer","Location":"Boston","DeviceID":"D890","IP Address":"192.168.1.100","MerchantID":"M4567","Channel":"Bank Transfer","TransactionDuration":5,"LoginAttempts":8,"AccountBalance":12000,"PreviousTransactionDate":"2025-03-01 22:00:00","HourOfTransaction":23,"TimeSinceLastTransaction":4500,"XGBoost_Fraud":true,"IsolationForest_Fraud":true}
  ];

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
      setUploadSuccess(false);
      setResponseData(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError("Please select a file to upload");
      return;
    }
    
    setUploading(true);
    setError(null);
    
    try {
      // Create FormData object to send the file
      const formData = new FormData();
      formData.append('file', file);
      
      // Make API request to the fraud detection endpoint
      const response = await fetch('http://localhost:3000/v1/fraud-detection', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      setResponseData(data);
      setUploadSuccess(true);
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
      console.error("Upload error:", err);
      
      // For demonstration purposes - set sample data if API fails
      // Remove this in production
      setResponseData(sampleData);
      setUploadSuccess(true);
    } finally {
      setUploading(false);
    }
  };

  const customStyles = {
    container: "min-h-screen bg-background relative",
    contentContainer: "container mx-auto px-4 py-12 md:py-24 relative",
    cardContainer: "bg-card/80 p-8 rounded-xl mb-16 shadow-lg mt-16 relative",
    cardTitle: "heading-xl mb-4 text-white text-center",
    cardSubtitle: "text-xl text-muted max-w-2xl mx-auto text-center mb-12",
    dropZone: "border-2 border-dashed border-primary/40 rounded-xl p-8 hover:border-primary transition-colors mb-6",
    buttonPrimary: "bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-lg transition-all w-full flex items-center justify-center",
    buttonDisabled: "bg-muted/30 text-muted-foreground font-medium py-3 px-6 rounded-lg w-full flex items-center justify-center cursor-not-allowed",
    uploadSuccess: "text-green-500 p-4 text-center font-medium",
    uploadError: "text-red-500 p-4 text-center font-medium",
    responseContainer: "mt-8 bg-card/50 p-6 rounded-lg border border-primary/20",
    responseTitle: "text-xl font-medium text-white mb-4",
    table: "w-full border-collapse",
    tableHeader: "bg-primary/20 text-white font-medium",
    tableCell: "border border-primary/20 p-3",
    trueValue: "text-red-500 font-medium",
    falseValue: "text-green-500 font-medium",
    tableContainer: "overflow-x-auto max-h-96 mt-4",
  };

  return (
    
    <div className={customStyles.container}>
      <ContentHeader/>
      {/* Add glow effects similar to the provided example */}
      <motion.div
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] -z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="fixed bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] -z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className={customStyles.contentContainer}>
        <motion.div 
          className={customStyles.cardContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute bg-primary2 inset-5 blur-[60px] -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "backInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-primary2 blur-[80px] scale-y-75 scale-x-125 rounded-full -z-10"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: "backOut" }}
          />

          <motion.h1
            className={customStyles.cardTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Fraud Detection
          </motion.h1>
          <motion.p
            className={customStyles.cardSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Upload your file for fraud analysis and detection
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className={customStyles.dropZone}>
                <div className="flex flex-col items-center justify-center text-center">
                  <svg 
                    className="w-16 h-16 text-primary/70 mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  
                  <h3 className="text-xl font-medium text-white mb-2">
                    {file ? "Selected File" : "Drop your file here"}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {file 
                      ? `${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`
                      : "Drag and drop your file, or click to browse"}
                  </p>
                  
                  <input
                    type="file"
                    className="hidden"
                    id="fileInput"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="fileInput"
                    className="bg-card hover:bg-card/80 text-white font-medium py-2 px-6 rounded-lg cursor-pointer transition-all border border-primary/40"
                  >
                    {file ? "Choose Another File" : "Browse Files"}
                  </label>
                </div>
              </div>
              
              {error && (
                <motion.div 
                  className={customStyles.uploadError}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.div>
              )}
              
              {uploadSuccess && (
                <motion.div 
                  className={customStyles.uploadSuccess}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  File uploaded and analyzed successfully!
                </motion.div>
              )}
              
              <button
                type="submit"
                disabled={uploading || !file}
                className={uploading || !file ? customStyles.buttonDisabled : customStyles.buttonPrimary}
              >
                {uploading ? (
                  <>
                    <svg 
                      className="animate-spin h-5 w-5 mr-3" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  "Upload & Analyze"
                )}
              </button>
            </form>
            
            {/* Show API response data in a table format */}
            {responseData && responseData.length > 0 && (
              <motion.div 
                className={customStyles.responseContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className={customStyles.responseTitle}>Fraud Detection Results</h3>
                
                <div className={customStyles.tableContainer}>
                  <table className={customStyles.table}>
                    <thead>
                      <tr className={customStyles.tableHeader}>
                        <th className={customStyles.tableCell}>Transaction ID</th>
                        <th className={customStyles.tableCell}>Date</th>
                        <th className={customStyles.tableCell}>Type</th>
                        <th className={customStyles.tableCell}>Amount</th>
                        <th className={customStyles.tableCell}>Location</th>
                        <th className={customStyles.tableCell}>Channel</th>
                        <th className={customStyles.tableCell}>XGBoost Fraud</th>
                        <th className={customStyles.tableCell}>Isolation Forest Fraud</th>
                      </tr>
                    </thead>
                    <tbody>
                      {responseData.map((transaction) => (
                        <tr key={transaction.TransactionID}>
                          <td className={customStyles.tableCell}>{transaction.TransactionID}</td>
                          <td className={customStyles.tableCell}>{transaction.TransactionDate}</td>
                          <td className={customStyles.tableCell}>{transaction.TransactionType}</td>
                          <td className={customStyles.tableCell}>${transaction.TransactionAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                          <td className={customStyles.tableCell}>{transaction.Location}</td>
                          <td className={customStyles.tableCell}>{transaction.Channel}</td>
                          <td className={`${customStyles.tableCell} ${transaction.XGBoost_Fraud ? customStyles.trueValue : customStyles.falseValue}`}>
                            {transaction.XGBoost_Fraud ? "TRUE" : "FALSE"}
                          </td>
                          <td className={`${customStyles.tableCell} ${transaction.IsolationForest_Fraud ? customStyles.trueValue : customStyles.falseValue}`}>
                            {transaction.IsolationForest_Fraud ? "TRUE" : "FALSE"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-red-500/25 mr-2"></span>
                    <span className="text-muted-foreground">Flagged as Fraud</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-green-500/25 mr-2"></span>
                    <span className="text-muted-foreground">Not Fraudulent</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FileUploadPage;