const express = require('express');
const router = express.Router();

const Project = require('../../models/Project');

router.get('/test', (req, res) => res.send('project route testing!'));

router.get('/', (req, res) => {
  Project.find()
    .then(members => res.json(projects))
    .catch(err => res.status(404).json({ nomeventsfound: 'No Projects found' }));
});

router.get('/:id', (req, res) => {
    Project.findById(req.params.id)
    .then(project => res.json(event))
    .catch(err => res.status(404).json({ noprojectfound: 'No Project found' }));
});

router.post('/', (req, res) => {
    Project.create(req.body)
    .then(project => res.json({ msg: 'Project added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Project' }));
});

router.put('/:id', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body)
    .then(project => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
    Project.findByIdAndRemove(req.params.id, req.body)
    .then(project => res.json({ mgs: 'Project entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such project' }));
});

module.exports = router;