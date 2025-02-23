const { Module } = require('./db');
const initialModules = [
    { name: 'Investing', description: 'Learn the basics of investing, stocks, bonds, and portfolios.' },
    { name: 'Savings', description: 'Understand how to save effectively and the importance of financial security.' },
    { name: 'Budgeting', description: 'Master the art of budgeting for managing personal finances.' },
    { name: 'Fraud Prevention', description: 'Learn how to protect yourself from financial fraud and scams.' }
  ];
  
  async function initializeModules() {
    try {
      const existingModules = await Module.find();
      if (existingModules.length === 0) {
        await Module.insertMany(initialModules);
        console.log('Initial modules added to the database.');
      }
    } catch (err) {
      console.error('Error adding initial modules:', err);
    }
  }
  
  module.exports = initializeModules;