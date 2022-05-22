
const express = require('express');
const app = express();

const bodyparser = require("body-parser");

const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());


app.set('view engine', 'ejs');

app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})

app.use(bodyparser.urlencoded({
  extended: true
}));


mongoose.connect("mongodb+srv://packobtainer:37h3YwU3pc9Axpi@cluster0.xw7wz.mongodb.net/test", {useNewUrlParser: true, useUnifiedTopology: true});

const TimesSchema = new mongoose.Schema({
    text: String,
    hits: Number,
    time: Date
});

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    cartHistory: Array,
    currentCart: Array
})

const userModel = mongoose.model("users", UserSchema);

const timeLineModel = mongoose.model("times", TimesSchema);


app.get('/times/getAllEvents', function(req, res) {

  timeLineModel.find({}, function(err, data){
      if (err){
        console.log("Error " + err);
      }else{
        console.log("Data "+ JSON.stringify(data) );
      }
      res.send(JSON.stringify(data));
  });
})

app.get("/user", function(req, res) {
  userModel.find({}, function(err, data){
    if (err){
      console.log("Error " + err);
    }else{
      console.log("Data "+ JSON.stringify(data) );
    }
    res.send(JSON.stringify(data));
});
})

app.post('/user/register', function(req, res) {
  userModel.create({
    'email': req.body.email,
    'password': req.body.password
  }, function(err, data) {
    if (err){
      console.log("Error " + err);
    } else {
      console.log("Data "+ JSON.stringify(data) );
    }
    res.send(JSON.stringify(data))})
})

app.put('/times/insert', function(req, res) {
  timeLineModel.create({
    'text': req.body.text,
    'hits': req.body.hits,
    'time': req.body.time
  }, function(err, data){
    if (err){
      console.log("Error " + err);
    }else{
      console.log("Data "+ JSON.stringify(data) );
    }
    res.send(JSON.stringify(data));
});
})



app.get('https://pokedex-assignment3.herokuapp.com/', function(req, res) {
    res.send('/public/index.html');
});

app.get('https://pokedex-assignment3.herokuapp.com/index.html', function(req, res) {
    res.send('/public/index.html');
});

app.get('https://pokedex-assignment3.herokuapp.com/profile.html', function(req, res) {
    res.send('/public/profile.html');
});

app.get('https://pokedex-assignment3.herokuapp.com/search.html', function(req, res) {
    res.send('/public/search.html');
});

app.use(express.static('./public'));
app.use(express.static('/public/pikachu.jpg/'))


