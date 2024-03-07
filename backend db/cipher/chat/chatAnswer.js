const {spawn} = require('child_process');

const childPython = spawn('pyton', ['file.py']);


childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
});

childPython.stderr.on('data', (data) => {
    console.error(`stdout: ${data}`)
})

childPython.on('close', (code) => {
    console.log(`success`)
})

/*
const fs = require("fs");
const { PythonShell } = require('python-shell');

let pyshell = new PythonShell('file.py');


exports.UserAnswer = (answ) => {

    fs.truncate('message.txt', err => {
        if(err) throw err; // не удалось очистить файл
        console.log('Файл успешно очищен');
    });    
    
    fs.writeFile("message.txt", String(answ), function(error){
        if(error){  // если ошибка
            return console.log(error);
        }
        console.log("Файл успешно записан");
    });
        
    pyshell.send("Как дела?");
    pyshell.on('message', function(message){
        console.log(message);
    });

    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
      });
    
    //let answer = fs.readFile("cipher/chat/message.txt");
    let answer = 1;
    console.log(answer);
    return answer;
}
*/