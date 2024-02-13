'use client'

import { GlobalHeader } from './../../components/global-header/index'
import Image from 'next/image'

const Support: React.FC = () => {
  return (
    <>
      <GlobalHeader />
      <div className="container px-20 pt-10">
        <h1 className="text-2xl text-center">支持我们</h1>
        <p>亲爱的朋友:</p>
        <p>
          如果你喜欢本站或本站的在线工具等服务曾对你有过帮助，那定会是我们最大的荣幸！
          欢迎请我们喝杯奶茶，所收到赞助将用于支付服务器及CDN等云计算服务的费用，以提供更加优质稳定的使用在线服务。
        </p>
        <div className="flex items-center flex-col">
          <div className="my-10">您可以使用微信赞助</div>
          <Image src="/img/wechat.png" alt="微信" width={400} height={600} />
          <div className="my-10">也可以使用支付宝赞助</div>
          <Image src="/img/alipay.jpg" alt="支付宝" width={400} height={600} />
        </div>
      </div>
    </>
  )
}

export default Support
