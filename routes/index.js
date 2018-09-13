var express = require('express');
var router = express.Router();
const eventController = require('../controllers').event;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// EVENT ENDPOINTS

router.get('/api/event', eventController.list);
router.post('/api/event',eventController.add);

module.exports = router;
