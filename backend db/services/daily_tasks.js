const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;
var currentDate = new Date();

const encoder = require("../cipher/encoder");
//const ReturnUserAnswer = require("./cipher/chat/chatAnswer")
      
const app2 = express();
app2.use(express.static("public"));  // статические файлы будут в папке public
app2.use(express.json());        // подключаем автоматический парсинг json

app2.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

app2.get("/api/users", async(req, res) => {
           
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

app2.put("/api/users", async(req, res)=>{
           
    if(!req.body) return res.sendStatus(400);
    const {mailuserID, name, password} = req.body;
    const collection = req.app.locals.collection.collection("users")
    try {
        const user_elem = await collection.findOne({mail: mailuserID});
        const userName = name;
        const userPassword = encoder.encoded(password);
        const userLevel = user_elem.level;
        try{
            const user = await collection.findOneAndUpdate({mail: mailuserID}, { $set: {name: userName, mail: mailuserID, password: userPassword, level: Number(userLevel)}},
             {returnDocument: "after" });
            if(user) res.send(user);
            else res.sendStatus(404);
        }
        catch(err){
            console.log(err);
            res.sendStatus(500);
        }
    }
    
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

app2.get("/api/login", async(req, res) => {
           
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

app2.put("/api/login", async(req, res)=>{
    const {id_user} = req.body;  
    const collection = req.app.locals.collection.collection("users");
       
    try{
        const username = await collection.findOne({mail: id_user})
        if (!username) return res.status(400) 
        else {
            const userName = username.name;
            const userMail = id_user;
            const userPassword = username.password;
            const userLevel = username.level + 1;
        
            try{
                const user = await collection.findOneAndUpdate({mail: id_user}, { $set: {name: userName, mail: userMail, password: userPassword, level: Number(userLevel)}},
                 {returnDocument: "after" });
                if(user) res.send(user);
                else res.sendStatus(404);
            }
            catch(err){
                console.log(err);
                res.sendStatus(500);
            }
        
        }
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

app2.get("/api/daily_tasks", async(req, res) => {
           
    const collection = req.app.locals.collection.collection("daily_tasks");
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
app.get("/api/daily_tasks/:id", async(req, res) => {
  const collection = req.app.locals.collection.collection("daily_tasks");
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
app2.post("/api/daily_tasks", async(req, res)=> {
          
    if(!req.body) return res.sendStatus(400);
          
    const userId = req.body.id_user;
    const userQ = req.body.task;
    const userA = req.body.message;
    const userDate = currentDate;
    const user = {id_user: userId, task: userQ, message: userA, date: userDate};
          
    const collection = req.app.locals.collection.collection("daily_tasks");
       
    try{
        await collection.insertOne(user);
        res.send(user);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

app2.get("/api/edit", async(req, res) => {
           
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

app2.post("/api/edit", async(req, res)=>{
    const {id_user} = req.body;  
    const collection = req.app.locals.collection.collection("users");
       
    try{
        const username = await collection.findOne({mail: id_user})
        if (!username) return res.status(400) 
        else res.send(username);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

/////////////////////////////////////////////////////////////////////

app2.get("/api/find", async(req, res) => {
           
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

app2.post("/api/find", async(req, res)=> {
          
    const {id_user} = req.body;
    if(!req.body) return res.sendStatus(400);
    
    const collection = req.app.locals.collection.collection("users");
       
    try{
        const username = await collection.findOne({mail: id_user});
        if (!username) return res.sendStatus(404) 
        else {
            res.send(username);
        }
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

/////////////////////////////////////////////////////////////////////
  
app2.get("/api/get_daily_tasks", async(req, res) => {
           
    const collection = req.app.locals.collection.collection("daily_tasks");
    try{
        const users = await collection.find({}).toArray();
        res.send(users);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }  
});

app2.post("/api/get_daily_tasks", async(req, res)=> {
          
    const {id_user} = req.body;
    if(!req.body) return res.sendStatus(400);
    
    const collection = req.app.locals.collection.collection("daily_tasks");
       
    try{
        const username = await collection.find({id_user: id_user}).toArray();
        if (!username) return res.sendStatus(404) 
        else {
            res.send(username);
        }
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports.app2=app2