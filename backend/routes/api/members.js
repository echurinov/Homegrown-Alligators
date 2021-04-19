const express = require('express');
const router = express.Router();

// Load Member model
const Member = require('../../models/Member');

// @route GET api/member/test
// @description tests members route
// @access Public
router.get('/test', (req, res) => res.send('member route testing!'));

// @route GET api/members
// @description Get all members
// @access Public
router.get('/', (req, res) => {
  Member.find()
    .then(members => res.json(members))
    .catch(err => res.status(404).json({ nomembersfound: 'No Members found' }));
});

// @route GET api/members/:id
// @description Get single member by id
// @access Public
router.get('/:id', (req, res) => {
  Member.findById(req.params.id)
    .then(member => res.json(member))
    .catch(err => res.status(404).json({ nomemberfound: 'No Member found' }));
});

// @route GET api/members
// @description add/save member
// @access Public
router.post('/', (req, res) => {
  Member.create(req.body)
    .then(member => res.json({ msg: 'Member added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this member' }));
});

// @route GET api/mebers/:id
// @description Update member
// @access Public
router.put('/:id', (req, res) => {
  Member.findByIdAndUpdate(req.params.id, req.body)
    .then(member => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/members/:id
// @description Delete member by id
// @access Public
router.delete('/:id', (req, res) => {
  Member.findByIdAndRemove(req.params.id, req.body)
    .then(member => res.json({ mgs: 'Member entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a member' }));
});

module.exports = router;