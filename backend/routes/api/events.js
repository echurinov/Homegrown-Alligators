const express = require('express');
const router = express.Router();

const Event = require('../../models/Calendar');

router.get('/test', (req, res) => res.send('event route testing!'));

router.get('/', (req, res) => {
  Event.find()
    .then(members => res.json(events))
    .catch(err => res.status(404).json({ nomeventsfound: 'No Events found' }));
});

router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(404).json({ noeventfound: 'No Event found' }));
});

router.post('/', (req, res) => {
  Event.create(req.body)
    .then(member => res.json({ msg: 'Event added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this event' }));
});

router.put('/:id', (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then(event => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Event.findByIdAndRemove(req.params.id, req.body)
    .then(event => res.json({ mgs: 'Event entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such event' }));
});

module.exports = router;