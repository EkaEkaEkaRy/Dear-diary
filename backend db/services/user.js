const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
var currentDate = new Date();

const encoder = require("../cipher/encoder");
//const ReturnUserAnswer = require("./cipher/chat/chatAnswer")
      
const app1 = express();
app1.use(express.static("public"));  // статические файлы будут в папке public
app1.use(express.json());        // подключаем автоматический парсинг json

app1.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

app1.get("/api/users", async(req, res) => {
           
    const collection = req.app.locals.collection.collection("users");
    try{
        const users = await collection.find({}).toArray();
        res.send(users);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }  
});

/*
app.get("/api/users/:id", async(req, res) => {
  const collection = req.app.locals.collection.collection("users");
  try{
  const id = new objectId(req.params.id);
  const user = await collection.findOne({_id: id});
  if(user) res.send(user);
  else res.sendStatus(404);
  }
  catch(err){
  console.log(err);
  res.sendStatus(500);
  }
  });
  */
      
  app1.post("/api/users", async(req, res)=> {
          
    const {name, mail, password} = req.body;
    if(!req.body) return res.sendStatus(400);
          
    const userName = name;
    const userMail = mail;
    const userPassword = encoder.encoded(password);
    const userLevel = 0;
    const user = {name: userName, mail: userMail, password: userPassword, level: userLevel};
          
    const collection = req.app.locals.collection.collection("users");
       
    try{
        const username = await collection.findOne({mail: mail})
        if (username) return res.sendStatus(404) 
        else {
            await collection.insertOne(user);
            res.send(user);
        }
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
/*
app1.delete("/api/users/:id", async(req, res)=>{
           
    const collection = req.app.locals.collection.collection("users");
    try{
        const id = new objectId(req.params.id);
        const user = await collection.findOneAndDelete({_id: id});
        if(user) res.send(user);
        else res.sendStatus(404);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
 */

app1.get("/api/login", async(req, res) => {
           
    const collection = req.app.locals.collection.collection("users");
    try{
        const users = await collection.find({}).toArray();
        res.send(users);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }  
});

app1.post("/api/login", async(req, res)=> {
          
    const {mail, password} = req.body;
    if(!req.body) return res.sendStatus(400);
          
    const userMail = mail;
    const userPassword = encoder.encoded(password);
    
    const collection = req.app.locals.collection.collection("users");
       
    try{
        const username = await collection.findOne({mail: userMail})
        if (!username) return res.sendStatus(404) 
        else {
            if (username.password !== userPassword) return res.sendStatus(400)
            res.send(username);
        }
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports.app1=app1