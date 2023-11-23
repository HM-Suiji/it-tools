import { createUuid } from '@/utils'
import './index.scss'

const date = new Date()

const renderMonth = () => {
	const currentDay = date.getDate()
	const result: React.JSX.Element[] = []
	const _renderWeek = (i: number) => {
		const week: React.JSX.Element[] = []
		for (let j = 0; j < 7; j++) {
			const day = i * 7 + j + 1
			week.push(
				<td
					className={day === currentDay ? 'current-day' : ''}
					key={createUuid()[0]}>
					{day}
				</td>
			)
		}
		return week
	}
	for (let i = 0; i < 6; i++) {
		result.push(<tr key={createUuid()[0]}>{_renderWeek(i)}</tr>)
	}
	return result
}

const Calendar: React.FC = () => {
	return (
		<div className="my-calendar">
			<div className="shell">
				<header>
					<div className="day">11</div>
					<div className="month">October</div>
				</header>
				<table className="calendar">
					<thead>
						<tr>
							<td>Mon</td>
							<td>Tue</td>
							<td>Wed</td>
							<td>Thu</td>
							<td>Fri</td>
							<td>Sat</td>
							<td>Sun</td>
						</tr>
					</thead>
					<tbody>
						{/* <tr>
							<td className="prev-month">25</td>
							<td className="prev-month">26</td>
							<td className="prev-month">27</td>
							<td className="prev-month">28</td>
							<td className="prev-month">29</td>
							<td className="prev-month">30</td>
							<td>1</td>
						</tr>
						<tr>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<td>5</td>
							<td>6</td>
							<td>7</td>
							<td>8</td>
						</tr>
						<tr>
							<td>9</td>
							<td>10</td>
							<td className="current-day">11</td>
							<td>12</td>
							<td>13</td>
							<td>14</td>
							<td>15</td>
						</tr>
						<tr>
							<td>16</td>
							<td>17</td>
							<td>18</td>
							<td>19</td>
							<td>20</td>
							<td>21</td>
							<td>22</td>
						</tr>
						<tr>
							<td>23</td>
							<td>24</td>
							<td>25</td>
							<td>26</td>
							<td>27</td>
							<td>28</td>
							<td>29</td>
						</tr>
						<tr>
							<td>30</td>
							<td>31</td>
							<td className="prev-month">1</td>
							<td className="prev-month">2</td>
							<td className="prev-month">3</td>
							<td className="prev-month">4</td>
							<td className="prev-month">5</td>
						</tr> */}
						{renderMonth() || ''}
					</tbody>
				</table>
				<div className="ring-left"></div>
				<div className="ring-right"></div>
			</div>
		</div>
	)
}

export { Calendar }
