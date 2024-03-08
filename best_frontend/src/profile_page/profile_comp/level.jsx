import l from './level.module.css'
function calcMajor(i) {
    return Math.floor(i/20);
}
function calcMinor(i) {
    return (i/20 - Math.floor(i/20));
}
const Level = () => {

    var major = calcMajor(localStorage.getItem('userLevelId'));
    var minor = calcMinor(localStorage.getItem('userLevelId'));
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