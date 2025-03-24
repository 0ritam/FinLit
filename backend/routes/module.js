const express = require('express');
const { Module } = require('../db');
const {requireAuth} = require('@clerk/express')
const moduleRoute = express.Router();


moduleRoute.post("/add", requireAuth(), async (req, res) => {
  try {
    const { name, description } = req.body;
    const newModule = await Module.create({ name, description });
    res.status(201).json({ msg: "Module added successfully", module: newModule });
  } catch (err) {
    res.status(500).json({ msg: "Error creating module", error: err.message });
  }
});

moduleRoute.get("/", async (req, res) => {
  try {
    const modules = await Module.find().populate('chapters').exec();
    res.status(200).json(modules);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching modules", error: err.message });
  }
});

module.exports = moduleRoute;
