const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectId;

const {app1} = require('./services/user')
const {app2} = require('./services/daily_tasks')

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
   
(async () => {
     try {
        await mongoClient.connect();
        app1.locals.collection = mongoClient.db("dairy");
        app1.listen(1330);
        console.log("Сервер 1 ожидает подключения...");
    }catch(err) {
        return console.log(err);
    } 
})();
   

(async () => {
    try {
       await mongoClient.connect();
       app2.locals.collection = mongoClient.db("dairy");
       app2.listen(1337);
       console.log("Сервер 2 ожидает подключения...");
   }catch(err) {
       return console.log(err);
   } 
})();


/////////////////////////////////////////////////////////////////////

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async() => {
       
    await mongoClient.close();
    console.log("Приложение завершило работу");
    process.exit();
});

