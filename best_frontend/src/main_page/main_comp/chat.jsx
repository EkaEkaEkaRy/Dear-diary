import c from './chat.module.css'
import React from 'react'

const mass = [
    { text: "osiernfgo" }, { text: "dfthbsej" }
]

const Chat = () => {
    return (
        <div className={c.chat_wrapper}>
            <header className={c.header}>
                Чат с психологической поддержкой
            </header>
            <main className={c.main}>
                <div className={c.texts}>
                    <Show messages={mass} />
                </div>
                <div className={c.sendtext}>
                    <SendMessageForm />
                </div>
                <div>
                    <input id='userInput' type='text' placeholder='введите запрос' />
                    <button placeholder='отправить'></button>
                </div>
            </main>
        </div>
    )

}
/*
function returnText() {
    var input = document.getElementById("userInput").value;
    Messages.push(input)
}
*/
class Show extends React.Component { //отображает сообщения
    render() {
        return (
            <ul className={c.list} >
                {
                    this.props.messages.map(message => {
                        return (
                            <li key={message.id}>
                                <div>
                                    {message.text}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

class SendMessageForm extends React.Component { //форма для отправки сообщений
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.message)
        this.props.getInput()
        this.setState({ // очищаем поле ввода
            message: ''
        })
    }
    getInput() {
        var inp = document.getElementById("textInput").value;
        mass.push(inp);
    }

    render() {
        return (
            <form
                className={c.send_from}>
                <input
                    id='textInput'
                    onChange={this.handleChange}
                    value={this.message}
                    placeholder="введите ваше сообщение и нажмите ENTER"
                    type="text" />
            </form>
        )
    }

}

export default Chat