var express = require('express');
var app = express();
var path = require('path');
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/testPage.html'));
});

app.get('/get/number', function(req, res) {
  res.json({
    "script test": {
      "labels":"Call Us Now",
      "feature_img":"\/wp-content\/uploads\/2020\/04\/image.png",
      "phone_number":"+1-408-123-4567"
    }
  });
});

app.listen(9004, () => {
  console.log('Listining on http://localhost:9004');
});
