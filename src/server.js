'use strict';

const express = require("express");
const cors = require('cors');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const app = express();

// 1- Built-in Express middlewares - Application--level
app.use(express.json());
app.use(cors());

app.use(logger);




app.get('/person',validator ,function(req, res){
    res.status(200).send(req.query);
  });
// app.get('/', function(req, res){
//     res.send({'name: ' + req.query.name});
//   });
function start(port) {
    app.listen(port,()=>{
        console.log(`running on port ${port}`)
    })
}
app.use(errorHandler);
app.use('*',notFound);

module.exports = {
    app: app,
    start: start
}