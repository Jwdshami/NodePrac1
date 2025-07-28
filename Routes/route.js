const express = require('express');
const route = express.Router();
const controller=require('../Controller/controller')

route.post('/GetInfo',controller.GetInfo );
route.post('/SaveData',controller.SaveData );
route.post('/UpdateData',controller.UpdateData );
route.delete('/deleteData', controller.deleteData);

module.exports = route;