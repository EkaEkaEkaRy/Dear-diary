import { Link } from 'react-router-dom'
import m from './music.module.css'
import cover1 from './covers/cover1.PNG'
import cover2 from './covers/cover2.PNG'
import cover3 from './covers/cover3.PNG'
import cover4 from './covers/cover4.PNG'
import cover5 from './covers/cover5.PNG'

const playlistst = [
    {
        name: "Расслабляющий джаз",
        link: "https://www.youtube.com/watch?v=mBnrxwzjeXU&pp=ygUOcmVsYXhpbmcgbXVzaWM%3D",
        img: cover1
    },
    {
        name: "Класическая музыка",
        link: "https://www.youtube.com/watch?v=QZTDZFtbrec&pp=ygUOcmVsYXhpbmcgbXVzaWM%3D",
        img: cover2
    },
    {
        name: "Музыка для сна и медитации",
        link: "https://www.youtube.com/watch?v=70AWriK3ZPs&pp=ygUOcmVsYXhpbmcgbXVzaWM%3D",
        img: cover3
    },
    {
        name: "Звуки природы",
        link: "https://www.youtube.com/watch?v=eKFTSSKCzWA&pp=ygUNbmF0dXJlIHNvdW5kcw%3D%3D",
        img: cover4
    },
    {
        name: "Звук дождя",
        link: "https://www.youtube.com/watch?v=vTUmcpQkYbU&pp=ygUNbmF0dXJlIHNvdW5kcw%3D%3D",
        img: cover5
    }
]
const Music = () => {
    return (
        <div className={m.music_wrapper}>
            <header className={m.header}>
                Здесь находятся плейлисты с расслабляющей музыкой
            </header>
            <main className={m.playlists}>
                {
                    playlistst.map(pl => {
                        return (
                            <div key={pl.id} >
                                <div className={m.cover}>
                                    <Link to={pl.link} target='blanc'>
                                        <img src={pl.img} className={m.img}/>
                                        <div>{pl.name}</div></Link>
                                </div>
                            </div>
                        )
                    })
                }

            </main>
        </div>
    )
}

export default Music