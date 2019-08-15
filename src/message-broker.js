// Author: Diego Canizales Bollain Goytia
// Date: Aug 14, 2019.
// Purpose:
//    The purpose of this messaging system is to act as an intermediary for alerting
//    important or required users for each of the requests needed by the SVPM software.

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/user_creation_approval', function (req, res) {
  var user_id = req.body.requester;
  console.log(user_id);
  axios.post('https://hooks.slack.com/services/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', {
    "text" : "A new user approval is waiting for response. (test)"
  })
  .then(function (response) {
    //console.log(response);
    res.send("Successfully connected to Slack API. Sending request.\n")
  })
  .catch(function (error) {
    //console.log(error);
    res.send("Something went wrong when attempting connectivity to Slack API.\n")
  })
});

app.listen(3000, function () {
  console.log('SVPM messaging system stared.');
});
