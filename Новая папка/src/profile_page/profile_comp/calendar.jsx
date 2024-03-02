/*import c from './calendar.module.css'
import {eachDayOfInterval, endOfMonth, format, startOfMonth} from "date-fns";
import {ru} from "date-fns/locale";

const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
function Cal() {
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth,
    })
    return (
        <div className={c.calendar_wrapper}>
            <div className={c.header}>{format(currentDate, "LLLL yyyy", {locale: ru})}</div>
            <div className={c.cols}>
                {weekdays.map((day) => {
                    return <div key={day}>{day}</div>;
                })}
                {daysInMonth.map((day, index) => {
                    return <div key={index}>{format(day, "d")}</div>
                })}
            </div>
        </div>
    )
}

export default Cal*/