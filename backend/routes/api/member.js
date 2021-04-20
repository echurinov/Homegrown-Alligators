const express = require('express');
const router = express.Router();

// Load models
const Member = require('../../models/Member');

router.route('/').get((req, res) => {
  Member.find()
    .then(members => res.json(members))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const position = req.body.position;

  const newMember = new Member({name, position});

  newMember.save()
    .then(() => res.json('Member added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Member.findById(req.params.id)
    .then(member => res.json(member))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Member.findByIdAndDelete(req.params.id)
    .then(() => res.json('Member deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Member.findById(req.params.id)
    .then(member => {
      member.name = req.body.name;
      member.position = req.body.position;


      member.save()
        .then(() => res.json('Member updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
