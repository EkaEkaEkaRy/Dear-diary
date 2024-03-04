const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;

const fs = require("fs");
const spawn = require("child_process").spawn;
const encoder = require("./cipher/encoder");
      
const app = express();
app.use(express.static("public"));  // статические файлы будут в папке public
app.use(express.json());        // подключаем автоматический парсинг json

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
   
(async () => {
     try {
        await mongoClient.connect();
        app.locals.collection = mongoClient.db("dairy");
        app.listen(1337);
        console.log("Сервер ожидает подключения...");
    }catch(err) {
        return console.log(err);
    } 
})();
   
app.get("/api/users", async(req, res) => {
           
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
      
app.post("/api/users", async(req, res)=> {
          
    if(!req.body) return res.sendStatus(400);
          
    const userName = req.body.name;
    const userMail = req.body.mail;
    const userPassword = encoder.encoded(req.body.password);
    const userLevel = 0;
    const user = {name: userName, mail: userMail, password: userPassword, level: userLevel};
          
    const collection = req.app.locals.collection.collection("users");
       
    try{
        await collection.insertOne(user);
        res.send(user);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

app.delete("/api/users/:id", async(req, res)=>{
           
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
      
app.put("/api/users", async(req, res)=>{
           
    if(!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    const userMail = req.body.mail;
    const userPassword = req.body.password;
    const userLevel = req.body.level;
          
    const collection = req.app.locals.collection.collection("users");
    try{
        const id = new objectId(req.body.id);
        const user = await collection.findOneAndUpdate({_id: id}, { $set: {name: userName, mail: userMail, password: userPassword, level: Number(userLevel)}},
         {returnDocument: "after" });
        if(user) res.send(user);
        else res.sendStatus(404);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});


/////////////////////////////////////////////////////////////////////

app.get("/api/chat", async(req, res) => {
           
    const collection = req.app.locals.collection.collection("chat");
    try{
        const chat = await collection.find({}).toArray();
        res.send(chat);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }  
});

app.get("/api/chat/:id", async(req, res) => {
  const collection = req.app.locals.collection.collection("chat");
  try{
  const id = new objectId(req.params.id);
  const chat = await collection.findOne({_id: id});
  if(user) res.send(chat);
  else res.sendStatus(404);
  }
  catch(err){
  console.log(err);
  res.sendStatus(500);
  }
  });
      
let currentDate = new Date();

function runPythonScript() {
    return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python', ['.\\cipher\\chat\\file.py']);
  
      let output = '';
      pythonProcess.stdout.on('data', (data) => {
        output += data.toString();
      });
  
      pythonProcess.on('close', (code) => {
        if (code !== 0) {
          return reject(new Error(`Python скрипт завершился с кодом ${code}`));
        }
        resolve(output);
      });
  
      pythonProcess.stderr.on('data', (data) => {
        reject(new Error(data));
      });
    });
  }


app.post("/api/chat", async(req, res)=> {
          
    if(!req.body) return res.sendStatus(400);
          
    const userMail = req.body.mail;
    const userMessage = req.body.message;
    const userDate = currentDate;
    const userIsSender = true;
    const user = {id_user: userMail, message: userMessage, date: userDate, sender: userIsSender};
          
    const collection = req.app.locals.collection.collection("chat");
       
    let answer;
    
    /*
    fs.truncate('cipher/chat/message.txt', err => {
        if(err) throw err; // не удалось очистить файл
        console.log('Файл успешно очищен');
     });
     */

    fs.writeFile("cipher/chat/message.txt", String(userMessage), function(error){
        if(error){  // если ошибка
            return console.log(error);
        }
        console.log("Файл успешно записан");
    });
    
    answer = runPythonScript()
    console.log(answer)

    const chatMessage = "hello" //fs.readFile("cipher/chat/message.txt");
    const chatDate = currentDate;
    const chatIsSender = false;
    const chat_answer = {id_user: userMail, message: chatMessage, date: chatDate, sender: chatIsSender};


    try{
        await collection.insertOne(user);
        res.send(user);

        
        await collection.insertOne(chat_answer);
        res.send(chat_answer);

    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
 

/////////////////////////////////////////////////////////////////////

app.get("/api/daily_tasks", async(req, res) => {
           
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
      
app.post("/api/daily_tasks", async(req, res)=> {
          
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

app.put("/api/daily_tasks", async(req, res)=>{
           
    if(!req.body) return res.sendStatus(400);
    const userId = req.body.id_user;
    const userQ = req.body.task;
    const userA = req.body.message;
    const userDate = currentDate;
          
    const collection = req.app.locals.collection.collection("daily_tasks");
    try{
        const id = new objectId(req.body.id);
        const user = await collection.findOneAndUpdate({_id: id}, { $set: {id_user: userId, task: userQ, message: userA, date: userDate}},
         {returnDocument: "after" });
        if(user) res.send(user);
        else res.sendStatus(404);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

/////////////////////////////////////////////////////////////////////
    
// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async() => {
       
    await mongoClient.close();
    console.log("Приложение завершило работу");
    process.exit();
});

