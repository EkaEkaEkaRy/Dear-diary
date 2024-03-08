import d from "./drawing.module.css"
import { React, Component, useRef, useEffect, useState } from "react"
/*import red from "./colors/red.png"
import orange from "./colors/orange.png"
import yellow from "./colors/yellow.png"
import green from "./colors/green.png"
import l_blue from "./colors/l_blue.png"
import blue from "./colors/blue.png"
import purple from "./colors/purple.png"
import black from "./colors/black.png"
import eraser from "./colors/eraser.png"*/



const Draw = () => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d")
        context.scale(2, 2)
        context.lineCap = "round"

        context.lineWidth = 5

        contextRef.current = context;
    }, [])

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
    }

    return (
        <div>
            <header className={d.header}>Это место для твоих рисунков</header>
            <body className={d.body}>
                <div className={d.Toolbar}>
                    
                    <div className={d.CanvasContainer}>
                        <canvas id="drawingCanvas"
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            
                            onMouseMove={draw}
                            ref={canvasRef}>

                        </canvas>
                    </div>


                </div>
            </body>

        </div>
    )
}
export default Draw
