const express = require('express');
const router = express.Router();

// Load models
const Member = require('../../models/Account');

router.route('/').get((req, res) => {
  Account.find()
    .then(accounts => res.json(accounts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const newAccountr = new Account({email, password});

  newAccount.save()
    .then(() => res.json('Account added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Account.findById(req.params.id)
    .then(account => res.json(account))
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
