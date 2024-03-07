import l from './level.module.css'
function calcMajor(i) {
    return Math.floor(i/100);
}
function calcMinor(i) {
    return (i/100 - Math.floor(i/100));
}
const Level = (props) => {
    var major = calcMajor(props.scale);
    var minor = calcMinor(props.scale);
    return (
        <div className={l.level_wrapper}>
            <label htmlFor="progress" className={l.label}>
                Уровень {major}
            </label>
            <progress className={l.level} id="progress" min="0" max="1" value={minor}></progress>
            
        </div>
    )
}
export default Level