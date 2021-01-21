const mongoose = require("mongoose");

// Create database Schemas
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  introtext: String,
  text: String,
});

// Initialize and export the model
module.exports = Project = mongoose.model("Project", projectSchema);
