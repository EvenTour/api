var express = require('express');
var router = express.Router();
const eventController = require('../controllers').event;
const organizerController = require('../controllers').organizer;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// EVENT ENDPOINTS

router.get('/api/events', eventController.list);
router.post('/api/event',eventController.add);
router.get('/api/organizers',organizerController.listOrganizers);
router.post('/api/organizer', organizerController.addOrganizer);

module.exports = router;
