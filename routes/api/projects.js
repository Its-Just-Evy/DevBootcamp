const express = require("express");
const router = express.Router();

// Load our model
const Project = require("../../models/Projects");

// Handle API routes
router.get("/", (req, res) => {
  Project.find()
    .populate("movies")
    .then((results) => res.json(results));
});

// Retrieve person by id
router.get("/:id", (req, res) => {
  Project.findById(req.params.id)
    .populate("movies")
    .then((result) => res.json(result));
});

// Add person
router.post("/", (req, res) => {
  let project = new Project({
    ...req.body,
  });

  project
    .save()
    .then((newProject) =>
      res.json({ status: "success", project: newProject })
    );
});

router.put("/:id", (req, res) => {
  Project.findByIdAndUpdate(req.params.id, {
    ...req.body,
  }).then((result) => res.json(result));
});

// Delete person by id
router.delete("/:id", (req, res) => {
  Project.findByIdAndRemove(req.params.id).then((result) =>
    res.json(result)
  );
});

module.exports = router;
