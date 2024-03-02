import p from './person.module.css'
import profile from '../profile.svg'

const Person = (props) => {
    var name = props.name
    return (
        <div className={p.person}>
            <img className={p.ava} src={profile} alt="Назад" />
            <div>{name}</div>
        </div>
    )
}

export default Person