'use client'

import { Button, Input, message } from 'antd'
import { useState } from 'react'
import { ToolTextArea } from '@/components'
import Image from 'next/image'

const limitField = (num: number) => {
  if (num >= 0 && num <= 300) {
    return num
  }
  message.error('输入的数值不合法')
  return 0
}

const BMI: React.FC = () => {
  const [height, setHeight] = useState<number>(160)
  const [weight, setWeight] = useState<number>(55)
  const [bmi, setBmi] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const reset = () => {
    setHeight(160)
    setWeight(55)
    setBmi('')
    setStatus('')
  }

  const handleCalculate = (h: number, w: number) => {
    h = h / 100
    const bmi = w / (h * h)
    setBmi(bmi.toFixed(1))

    if (bmi < 18.5) setStatus('偏瘦')
    else if (bmi < 24) setStatus('正常')
    else if (bmi < 28) setStatus('偏胖')
    else setStatus('肥胖')
  }

  return (
    <>
      <div className="sm:grid sm:grid-cols-2">
        <div className="flex flex-col items-start justify-around">
          <div className="flex">
            <div className="flex flex-col w-20 mr-6">
              <span className="text-left">身高：</span>
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(limitField(+e.target.value))}
              />
            </div>
            <div className="flex flex-col w-20">
              <span className="text-left">体重：</span>
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(limitField(+e.target.value))}
              />
            </div>
          </div>
          <div>
            <Button
              className="bg-[#146aa2] text-white"
              onClick={() => handleCalculate(height, weight)}
            >
              立即计算
            </Button>
            <Button className="bg-[#737373] text-white" onClick={reset}>
              重置数据
            </Button>
          </div>
          {bmi && (
            <div className="text-left w-full p-4 bg-[#eeffdd]">
              您的体质指数为 <b>{bmi}</b>，属于 <b>{status}</b>。
            </div>
          )}
        </div>
        <Image src="/img/bmi.jpg" alt="" height={200} width={350} />
      </div>
      <hr className="my-6" />
      <ToolTextArea extraStyle title="关于BMI身体质量指数：">
        BMI指数（即身体质量指数，简称体质指数又称体重，英文为Body Mass
        Index，简称BMI），是用体重公斤数除以身高米数平方得出的数字，是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。主要用于统计用途，当我们需要比较及分析一个人的体重对于不同高度的人所带来的健康影响时，BMI值是一个中立而可靠的指标。
        <br />
        详情参看
        <a
          className="text-blue-400"
          href="https://baike.baidu.com/item/%E8%BA%AB%E4%BD%93%E8%B4%A8%E9%87%8F%E6%8C%87%E6%95%B0/8706438"
          target="_blank"
        >
          百度百科
        </a>
        。
      </ToolTextArea>
      <ToolTextArea extraStyle title="BMI体质指数不适合人群如下：">
        1. 未满18岁；
        <br />
        2. 是运动员；
        <br />
        3. 正在做重量训练；
        <br />
        4. 怀孕或哺乳中；
        <br />
        5. 身体虚弱或久坐不动的老人；
        <br />
        6. 身患如身高相关疾病的人，如侏儒症
      </ToolTextArea>
      <ToolTextArea title="BMI指数参考表（只适合18岁及以上人群）">
        <table className="common-table w-full mb-2" log-set-param="table_view">
          <tbody>
            <tr>
              <td width="105"></td>
              <td width="116">WHO标准</td>
              <td width="93">亚洲标准</td>
              <td width="113">中国标准</td>
              <td width="230">相关疾病发病危险性</td>
            </tr>
            <tr>
              <td width="105">偏瘦</td>
              <td colSpan={3}>&lt;18.5</td>
              <td width="105">低（但其它疾病危险性增加）</td>
            </tr>
            <tr>
              <td width="116">正常</td>
              <td width="93">18.5-24.9</td>
              <td width="113">18.5-22.9</td>
              <td width="230">18.5-23.9</td>
              <td width="105">平均水平</td>
            </tr>
            <tr>
              <td width="116">超重</td>
              <td width="93">≥25</td>
              <td width="113">≥23</td>
              <td width="230">≥24</td>
              <td width="105">略增</td>
            </tr>
            <tr>
              <td width="116">偏胖</td>
              <td width="93">25.0~29.9</td>
              <td width="113">23~24.9</td>
              <td width="230">24~27.9</td>
              <td width="105">增加</td>
            </tr>
            <tr>
              <td width="116">肥胖</td>
              <td width="93">30.0~34.9</td>
              <td width="113">25~29.9</td>
              <td width="230">≥28</td>
              <td width="105">中度增加</td>
            </tr>
            <tr>
              <td width="116">重度肥胖</td>
              <td width="93">35.0~39.9</td>
              <td width="113">≥30</td>
              <td width="230">——</td>
              <td width="105">严重增加</td>
            </tr>
            <tr>
              <td width="230">极重度肥胖</td>
              <td colSpan={3}>≥40.0</td>
              <td>非常严重增加</td>
            </tr>
          </tbody>
        </table>
        从表中可知最理想的体重指数是22。
      </ToolTextArea>
      <ToolTextArea title="7~17岁儿童青少年超重肥胖判断标准">
        <table cellPadding="0" cellSpacing="0" className="common-table w-full">
          <tbody>
            <tr>
              <td width="15%">
                <b>性别</b>
              </td>
              <td width="15%">
                <b>年龄</b>
              </td>
              <td width="35%">
                <b>超重</b>
              </td>
              <td width="35%">
                <b>肥胖</b>
              </td>
            </tr>
            <tr>
              <td rowSpan={11}>
                <b>女</b>
              </td>
              <td>7</td> <td>18.9&gt;BMI&gt;=17.2</td>
              <td>BMI&gt;=18.9</td>
            </tr>
            <tr>
              <td>8</td> <td>19.9&gt;BMI&gt;=18.1</td>
              <td>BMI&gt;=19.9</td>
            </tr>
            <tr>
              <td>9</td> <td>21.0&gt;BMI&gt;=19.0</td>
              <td>BMI&gt;=21.0</td>
            </tr>
            <tr>
              <td>10</td>
              <td>22.1&gt;BMI&gt;=20.0</td>
              <td>BMI&gt;=22.1</td>
            </tr>
            <tr>
              <td>11</td>
              <td>23.3&gt;BMI&gt;=21.1</td>
              <td>BMI&gt;=23.3</td>
            </tr>
            <tr>
              <td>12</td>
              <td>24.5&gt;BMI&gt;=21.9</td>
              <td>BMI&gt;=24.5</td>
            </tr>
            <tr>
              <td>13</td>
              <td>25.6&gt;BMI&gt;=22.6</td>
              <td>BMI&gt;=25.6</td>
            </tr>
            <tr>
              <td>14</td>
              <td>26.3&gt;BMI&gt;=23.0</td>
              <td>BMI&gt;=26.3</td>
            </tr>
            <tr>
              <td>15</td>
              <td>26.9&gt;BMI&gt;=23.4</td>
              <td>BMI&gt;=26.9</td>
            </tr>
            <tr>
              <td>16</td>
              <td>27.4&gt;BMI&gt;=23.7</td>
              <td>BMI&gt;=27.4</td>
            </tr>
            <tr>
              <td>17</td>
              <td>27.7&gt;BMI&gt;=23.8</td>
              <td>BMI&gt;=27.7</td>
            </tr>
            <tr>
              <td rowSpan={11}>
                <b>男</b>
              </td>
              <td>7</td> <td>19.2&gt;BMI&gt;=17.4</td>
              <td>BMI&gt;=19.2</td>
            </tr>
            <tr>
              <td>8</td> <td>20.3&gt;BMI&gt;=18.1</td>
              <td>BMI&gt;=20.3</td>
            </tr>
            <tr>
              <td>9</td> <td>21.4&gt;BMI&gt;=18.9</td>
              <td>BMI&gt;=21.4</td>
            </tr>
            <tr>
              <td>10</td>
              <td>22.5&gt;BMI&gt;=19.6</td>
              <td>BMI&gt;=22.5</td>
            </tr>
            <tr>
              <td>11</td>
              <td>23.6&gt;BMI&gt;=20.3</td>
              <td>BMI&gt;=23.6</td>
            </tr>
            <tr>
              <td>12</td>
              <td>24.7&gt;BMI&gt;=21.0</td>
              <td>BMI&gt;=24.7</td>
            </tr>
            <tr>
              <td>13</td>
              <td>25.7&gt;BMI&gt;=21.9</td>
              <td>BMI&gt;=25.7</td>
            </tr>
            <tr>
              <td>14</td>
              <td>26.4&gt;BMI&gt;=22.6</td>
              <td>BMI&gt;=26.4</td>
            </tr>
            <tr>
              <td>15</td>
              <td>26.9&gt;BMI&gt;=23.1</td>
              <td>BMI&gt;=26.9</td>
            </tr>
            <tr>
              <td>16</td>
              <td>27.4&gt;BMI&gt;=23.5</td>
              <td>BMI&gt;=27.4</td>
            </tr>
            <tr>
              <td>17</td>
              <td>27.8&gt;BMI&gt;=23.8</td>
              <td>BMI&gt;=27.8</td>
            </tr>
          </tbody>
        </table>
      </ToolTextArea>
    </>
  )
}

export default BMI
