var express = require('express');
var router = express.Router();
let USER = require('../model/user.model')
let userController = require('../controller/user.controller')
let campaignController = require('../controller/campaign.contorller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/login',userController.Login)

router.post('/api/campaign/create',campaignController.add)

router.get('/api/campaign/show',campaignController.show)

router.patch('/api/campaign/update',campaignController.donate)


module.exports = router;
