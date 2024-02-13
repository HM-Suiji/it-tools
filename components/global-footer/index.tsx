import { Layout } from 'antd'
import Link from 'next/link'

const { Footer } = Layout

export const GlobalFooter: React.FC = () => {
  return (
    <Footer className="w-full">
      <ul className="flex justify-evenly mb-6">
        <li>
          <Link href="/about">关于我们</Link>
        </li>
        <li>
          <Link href="/">工具博客</Link>
        </li>
        <li>
          <Link href="/support">支持我们</Link>
        </li>
        <li>
          <Link href="/">免责申明</Link>
        </li>
        <li>
          <Link href="/">服务条款</Link>
        </li>
        <li>
          <Link href="/">反馈建议</Link>
        </li>
      </ul>
      <div className="friend-link mx-[10%] flex">
        <span className="mx-6">友情链接:</span>
        <ul className="flex">
          <li className="mx-4">
            <Link href="https://uutool.cn/">UU在线工具</Link>
          </li>
          <li className="mx-4">
            <Link href="https://blog.hm-illusion.top/">幻梦空间站</Link>
          </li>
          <li className="mx-4">
            <Link href="https://nextjs.org/">NextJS</Link>
          </li>
          <li className="mx-4">
            <Link href="">...</Link>
          </li>
          <li className="mx-4">
            <Link href="">...</Link>
          </li>
        </ul>
      </div>
      <div className="m-auto text-center">
        Copyright © 2024 {process.env.NEXT_PUBLIC_COMPANY || ''} All Rights
        Reserved {process.env.NEXT_PUBLIC_INTERNET_CONTENT_PROVIDER || ''}
      </div>
    </Footer>
  )
}
