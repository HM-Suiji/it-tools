import './index.scss'

const date = new Date()

const GenerateCalendar = () => {
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate() // 当月天数
  const prevMonthDays = new Date(
    date.getFullYear(),
    date.getMonth(),
    0,
  ).getDate() // 上月天数
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1,
  ).getDay() // 当月第一天是星期几
  const currentDay = date.getDate() // 当前日期

  const calendarRows = []
  let day = 1

  // 循环生成行和单元格
  for (let i = 0; i < 6; i++) {
    const cells = []

    // 生成前一个月的日期
    for (let j = 0; j < 6; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        cells.push(
          <td key={`prev-${j}`} className="prev-month">
            {prevMonthDays - firstDayOfMonth + j + 1}
          </td>,
        )
      } else if (day <= daysInMonth) {
        // 生成当前月的日期
        const classNames = day === currentDay ? 'current-day' : ''
        cells.push(
          <td key={day} className={classNames}>
            {day}
          </td>,
        )
        day++
      } else {
        // 生成下一个月的日期
        cells.push(
          <td key={`next-${j}`} className="prev-month">
            {day - daysInMonth}
          </td>,
        )
        day++
      }
    }

    // 将每行的单元格添加到日历行数组中
    calendarRows.push(<tr key={i}>{cells}</tr>)
  }

  return calendarRows
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const Calendar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`my-calendar ${className}`}>
      <div className="shell">
        <header>
          <div className="day">{date.getMonth() + 1}</div>
          <div className="month">{months[date.getMonth()]}</div>
        </header>
        <table className="calendar">
          <thead>
            <tr>
              <td>Sun</td>
              <td>Mon</td>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thu</td>
              <td>Fri</td>
              <td>Sat</td>
            </tr>
          </thead>
          <tbody>
            <GenerateCalendar />
          </tbody>
        </table>
      </div>
    </div>
  )
}
