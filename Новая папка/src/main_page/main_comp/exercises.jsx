import t from './exercises.module.css'

const exercises = [
    {
        name: 'Аутогенная релаксация',
        disc: "Слово «аутогенная» означает, что сила исходит изнутри, то есть это некая форма самовнушения. При помощи этой техники вы используете как визуальные образы, так и осознанность тела и его ощущений, чтобы снизить стресс. В этой технике есть 6 ключевых упражнений:",
        exer: [
            "Мышечное расслабление, которое становится возможным благодаря повторениям таких фраз как «Моя правая рука становится тяжелой». Подобным же образом можно «обращаться» и к другим конечностям своего тела.",
            "Пассивная концентрация, при которой человек фокусируется на чувстве тепла,  выражается фразой «Моя рука становится теплой».",
            "Инициирование сердечной активности: «Мое сердце спокойно».",
            "Пассивная концентрация на дыхании при помощи повторения фразы «Я дышу спокойно».",
            "Сосредоточение на тепле в области брюшной полости: «Мое солнечное сплетение несет тепло».",
            "Пассивная концентрация на прохладе, исходящей из области черепа: «Мой лоб прохладный»."
        ]
    },
    {
        name: 'Прогрессивное расслабление мышц',
        disc: "При помощи этой техники релаксации вы фокусируетесь на медленном напряжении, а затем расслабляете каждую группу мышц. Методика помогает буквально увидеть разницу между напряжением и расслабленностью, что благоприятно сказывается на настроении в том числе и потому, что возвращает нас в текущий момент времени.",
        exer: [
            "Суть упражнения в том, чтобы последовательно напрягать и расслаблять следующие участки своего тела в течение 10-20 секунд: плечи, живот, ноги, руки, лоб, глаза (зажмуривание), шея.",
        ]
    },
    {
        name: 'Визуализация',
        disc: "Здесь вы создаете в голове мысленные образы, чтобы совершить виртуальное путешествие в спокойное место. Вы можете закрыть глаза, сесть в тихом месте, ослабить плотную одежду и сосредоточиться на своем дыхании. Стремитесь сфокусироваться на настоящем моменте и думать о хорошем.",
        exer: [
            "Суть упражнения в том, чтобы последовательно напрягать и расслаблять следующие участки своего тела в течение 10-20 секунд: плечи, живот, ноги, руки, лоб, глаза (зажмуривание), шея. Чтобы расслабиться, задействуйте как можно больше чувств. Например, если представляете себя на берегу океана, фокусируйтесь на звуках, запахах и даже на телесных и вкусовых ощущениях."
        ]
    },
    {
        name: 'Техника «Тряска»',
        disc: "Эта телесная техника помогает запустить работу парасимпатической системы, высвободить избыток гормонов стресса кортизола и адреналина и снять напряжение.",
        exer: [
            "Встаньте на пол босиком или в удобной обуви. Начните трясти кистями рук, постепенно включая в работу локти, плечи, корпус, голову, ноги. Можно немного потопать ногами по полу. Тряска должна быть интенсивной, чтобы «включилось» все тело."
        ]
    },
    {
        name: '«Упражнение «Пять чувств»',
        disc: "Это очень простое и эффективное упражнение для переключения из одного эмоционального состояния на другое. Оно поможет вернуться в «здесь и сейчас» и снизит стресс",
        exer: [
            "В момент, когда чувствуете напряжение, беспокойство или гнев, отметьте вокруг себя: 5 предметов, которые вы можете рассмотреть; 4 звука, которые вы слышите; 3 предмета с разной фактурой, к которым можно прикоснуться; 2 запаха, которые вы можете ощущать; 1 вкус, который вы можете попробовать."
        ]
    },
]

const Tasks = () => {
    var r = Math.floor(Math.random() * exercises.length);
    return (
        <div className={t.tasks_wrapper}>
            <header className={t.header}>
                Упражнения для снятия стресса
            </header>
            <main className={t.main}>
                <div className={t.task_name}>{exercises[r].name}</div>
                <div>{exercises[r].disc}</div>
                <ul className={t.disc}>
                    {
                        exercises[r].exer.map(p => {
                            return (
                                <li key={p.id}>{p}</li>
                            )
                        })
                    }
                </ul>


            </main>
        </div>
    )
}

export default Tasks