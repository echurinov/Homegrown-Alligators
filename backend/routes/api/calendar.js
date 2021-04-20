const express = require('express');
const router = express.Router();

// Load models
const Calendar = require('../../models/Calendar');

router.route('/').get((req, res) => {
  Calendar.find()
    .then(calendars => res.json(calendars))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  const colorIndex = req.body.colorIndex;

  const newCalendar = new Calendar({title, startDate, endDate, colorIndex});

  newCalendar.save()
    .then(() => res.json('Calendar added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Calendar.findById(req.params.id)
    .then(calendar => res.json(calendar))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Calendar.findByIdAndDelete(req.params.id)
    .then(() => res.json('Calendar deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Calendar.findById(req.params.id)
    .then(calendar => {
      calendar.title = req.body.title;
      calendar.startDate = req.body.startDate;
      calendar.endDate = req.body.endDate;
      calendar.colorIndex = req.body.colorIndex;


      calendar.save()
        .then(() => res.json('Calendar updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
