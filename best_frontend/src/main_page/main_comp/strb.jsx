import d from "./drawing.module.css"
import { React, Component, useRef, useEffect, useState } from "react"
import red from "./colors/red.png"
import orange from "./colors/orange.png"
import yellow from "./colors/yellow.png"
import green from "./colors/green.png"
import l_blue from "./colors/blue.png"
import blue from "./colors/blue.png"
import purple from "./colors/purple.png"
import black from "./colors/black.png"
import eraser from "./colors/eraser.png"

class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

const Draw = () => {
    return (
        <div>
            <body className={d.body}>
                <div className={d.Toolbar}>
                    <img src={red} className={d.img} alt="Красная кисть" onclick={changeColor('rgb(255,0,0)', 3, this)} />
                    <img src={orange} alt="Оранжевый кисть" onclick={changeColor('rgb(255,165,0)', 3, this)} />
                    <img src={yellow} alt="Желтая кисть" onclick={changeColor('rgb(255,255,0)', 3, this)} />
                    <img src={green} alt="Зеленая кисть" onclick={changeColor('rgb(0,255,0)', 3, this)} />
                    <img src={l_blue} alt="Голубая кисть" onclick={changeColor('rgb(0,255,255)', 3, this)} />
                    <img src={blue} alt="Синяя кисть" onclick={changeColor('rgb(0,0,255)', 3, this)} />
                    <img src={purple} alt="Фиолетовая кисть" onclick={changeColor('rgb(255,0,255)', 3, this)} />
                    <img src={black} alt="Черная кисть" onclick={changeColor('rgb(0,0,0)', 3, this)} />
                    <img style="height: 40px;" src={eraser} alt="Ластик" onclick={changeColor('rgb(255,255,255)', 9, this)} />

                    <div className={d.CanvasContainer}>
                        <canvas id="drawingCanvas"></canvas>
                    </div>
                    <button onclick={saveCanvas()} value={"Сохранить"}></button>
                    <button onclick={clearCanvas()} value={"Очистить"}></button>
                    <div id="savedCopyContainer">
                        <img id="savedImageCopy" />
                        Щелкните правой кнопкой мыши для сохранения ...
                    </div>
                </div>
            </body>
        </div>
    )
}
var canvas;
var context;
var isDrawing;

window.onload = function () {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");  // создает контекст для рисования 2d картинки
    context.lineWidth = 3;  // толщина маркера

    // требуемые для рисования события
    canvas.onmousedown = startDrawing; // при нажатии на мышку
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw; // при движении мышки
}

var previousColorElement;
function changeColor(color, thickness, imgElement) {
    // 	Меняем текущий цвет рисования и толщину (Для ластика толщина берется больше)
    context.strokeStyle = color;
    context.lineWidth = thickness;

    // Меняем стиль элемента <img>, по которому щелкнули
    imgElement.className = "Selected";

    // Возвращаем ранее выбранный элемент <img> в нормальное состояние
    if (previousColorElement != null)
        previousColorElement.className = "";

    previousColorElement = imgElement;
}

function startDrawing(e) {
    // Начинаем рисовать


    // Создаем новый путь (с текущим цветом и толщиной линии) 
    context.beginPath();

    // Нажатием левой кнопки мыши помещаем "кисть" на холст
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}

function draw(e) {
    if (isDrawing == true) {
        // Определяем текущие координаты указателя мыши
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;

        // Рисуем линию до новой координаты
        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {  // очищает область заданную параметрами
    context.clearRect(0, 0, canvas.width, canvas.height);

    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "none";
}

var url = canvas.toDataURL("image/jpeg");

window.location = canvas.toDataURL();
function saveCanvas() {
    // Находим элемент <img>
    var imageCopy = document.getElementById("savedImageCopy");

    // Отображаем данные холста в элементе <img>
    imageCopy.src = canvas.toDataURL();

    // Показываем элемент <div>, делая изображение видимым
    // делая изображение видимым
    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}

*/