var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.get('/', function(req, res) {
  res.render('index.jade', { title: 'Home' });
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
