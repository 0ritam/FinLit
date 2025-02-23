const express = require('express');
const { Module, Chapter, Section } = require('../db'); // Import the necessary models
const contentRoute = express.Router();

// Route to add content to a specific module
contentRoute.post('/add', async (req, res) => {
  const { moduleId } = req.params;
  const { title, sections } = req.body; // Destructure the title and sections from the request body

  try {
    // Create a new chapter content
    const newContent = new Chapter({
      title,
      moduleId,
      sections: sections.map(section => ({
        heading: section.heading,
        paragraphs: section.paragraphs
      }))
    });

    // Save the new content (chapter) to the database
    await newContent.save();

    // Add the new content (chapter) to the module
    await Module.findByIdAndUpdate(moduleId, {
      $push: { chapters: newContent._id }
    });

    res.status(200).json({
      msg: 'Content added successfully to the module',
      content: newContent
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Error adding content to the module',
      error: err.message
    });
  }
});

// Route to fetch content for a specific module
contentRoute.get('/get', async (req, res) => {
  const { moduleId } = req.params;

  try {
    // Fetch the module by ID and populate its chapters (content)
    const module = await Module.findById(moduleId).populate('chapters');

    if (!module) {
      return res.status(404).json({ msg: 'Module not found' });
    }

    res.status(200).json({
      msg: 'Content fetched successfully',
      content: module.chapters
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Error fetching content',
      error: err.message
    });
  }
});

module.exports = contentRoute;
