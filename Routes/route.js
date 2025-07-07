const express = require('express');
const route = express.Router();
const controller=require('../Controller/controller')


route.get('/route',controller.Controller );

module.exports = route;