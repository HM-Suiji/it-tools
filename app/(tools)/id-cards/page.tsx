'use client'

import { Button, Input } from 'antd'
import { useState } from 'react'

const weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
const checkCode = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]

const IdCards: React.FC = () => {
	const [id, setId] = useState<string>('')
	const [preventLeng, setPreventLeng] = useState<number>(0)
	return (
		<div className="flex flex-col items-start">
			<Input
				onChange={(e) => {
					const str = e.target.value
					const dif = str.charAt(str.length - 1).toUpperCase()
					if (str.length < preventLeng) setId(id.substring(0, id.length - 1))
					else if (/[0-9X]/.test(dif)) setId(id + dif)
					setPreventLeng(str.length)
				}}
				value={id}
				className="w-[27rem] h-[2.4375rem]"
				placeholder="请输入6位及以上身份证号码，输入越多位数越精准"></Input>
			<Button onClick={() => setId('')}>刷新</Button>
			<div>
				<ul className="">
					<li>归属地：-</li>
					<li>省份：-</li>
					<li>城市：-</li>
					<li>区域：-</li>
					<li>出生日：-</li>
					<li>性别：-</li>
					<li>合法：-</li>
				</ul>
			</div>
			<div>
				<hr />
				加权因子表：
				<div className="table">
					<table border={1}>
						<thead>
							<tr>
								<th>位置序号</th> <th>1</th> <th>2</th> <th>3</th> <th>4</th>{' '}
								<th>5</th> <th>6</th> <th>7</th> <th>8</th> <th>9</th>{' '}
								<th>10</th> <th>11</th> <th>12</th> <th>13</th> <th>14</th>{' '}
								<th>15</th> <th>16</th> <th>17</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>加权因子</td> <td>7</td> <td>9</td> <td>10</td> <td>5</td>{' '}
								<td>8</td> <td>4</td> <td>2</td> <td>1</td> <td>6</td>{' '}
								<td>3</td> <td>7</td> <td>9</td> <td>10</td> <td>5</td>{' '}
								<td>8</td> <td>4</td> <td>2</td>
							</tr>
						</tbody>
					</table>
				</div>
				校验码表:
				<div className="table-scroll">
					<table border={1}>
						<thead>
							<tr>
								<th>余数</th> <th>0</th> <th>1</th> <th>2</th> <th>3</th>{' '}
								<th>4</th> <th>5</th> <th>6</th> <th>7</th> <th>8</th>{' '}
								<th>9</th> <th>10</th>
							</tr>
						</thead>{' '}
						<tbody>
							<tr>
								<td>校验码</td> <td>1</td> <td>0</td> <td>X</td> <td>9</td>{' '}
								<td>8</td> <td>7</td> <td>6</td> <td>5</td> <td>4</td>{' '}
								<td>3</td> <td>2</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default IdCards
