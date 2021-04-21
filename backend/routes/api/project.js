const express = require('express');
const router = express.Router();

// Load models
const Project = require('../../models/Project');

router.route('/').get((req, res) => {
    Project.find()
      .then(projects => res.json(projects))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageName = req.body.imageName;
  
    const newProject = new Project({title, description, imageName});
  
    newProject.save()
      .then(() => res.json('Project added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
      .then(project => res.json(project))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
      .then(() => res.json('Project deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Project.findById(req.params.id)
      .then(project => {
        project.title = req.body.title;
        project.description = req.body.description;

  
        project.save()
          .then(() => res.json('Project updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = router;
