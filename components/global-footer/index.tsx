import { Layout } from 'antd'
import Link from 'next/link'

const { Footer } = Layout

export const GlobalFooter: React.FC = () => {
  return (
    <Footer className="w-full">
      <ul className="flex justify-evenly">
        <li>
          <Link href="/about">关于我们</Link>
        </li>
        <li>
          <Link href="/">工具博客</Link>
        </li>
        <li>
          <Link href="/">支持我们</Link>
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
      <div className="m-auto text-center">
        Copyright © 2024 {process.env.NEXT_PUBLIC_COMPANY || ''} All Rights
        Reserved {process.env.NEXT_PUBLIC_INTERNET_CONTENT_PROVIDER || ''}
      </div>
    </Footer>
  )
}
