var express =   require("express");
var multer  =   require('multer');
var app         =   express();
var contentType = require('content-type')
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads/games/files');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});


var upload_game_art = multer({ storage : storage}).array('game_art', 5);

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post('/game/art',function(req,res){
    console.log(req.body.surname)
    upload_game_art(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(4000,function(){
    console.log("Working on port 4000");
});