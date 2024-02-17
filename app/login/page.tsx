'use client'

import { Button, Form } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import LoginImg from '@/assets/img/login-bg.jpg'
import './index.scss'
// import { signIn } from 'next-auth/react'

type FieldType = {
  username?: string
  email?: string
  password?: string
}

const onFinish = (values: any) => {
  console.log('Success:', values)
  localStorage.setItem('user-msg', values)
  // signIn('credentials', {
  //   username: 'Suiji',
  //   password: 'nextauth',
  //   email: '1704802092@qq.com',
  //   csrfToken:
  //     '574ba580e8c9c5f79acc6f0c8cd5a85986d79d6726392c6fa01b9a83ffd796a9',
  // })
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const handleForget = () => {}

// const getMemorize = () => {
//   const userMsg = '{}'
//   return userMsg ? JSON.parse(userMsg as string) : undefined
// }

const Login: React.FC = () => {
  return (
    <div className="login-container h-screen w-screen bg-gradient-to-l from-[#9c88ff] to-[#3cadeb] flex justify-center">
      <div className="relative top-24 w-3/4 h-3/4 shadow-lg shadow-[rgba(0,0,0,.8)]">
        <Image className="absolute z-0" src={LoginImg} fill alt="" />
        <div className="flex flex-col absolute z-10 w-1/3 h-full bg-white right-0 justify-center items-center">
          <h1 className="text-4xl font-black">Login/Register</h1>
          <Form
            name="login-form"
            // initialValues={getMemorize()}
            className="mt-2"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <input type="text" className="input" placeholder="USER NAME" />
            </Form.Item>
            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <input type="text" className="input" placeholder="EMAIL" />
            </Form.Item>
            <Form.Item<FieldType>
              className="mb-2"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <input type="password" className="input" placeholder="PASSWORD" />
            </Form.Item>
            <Link
              href="#"
              onClick={handleForget}
              className="float-right my-2.5"
            >
              Forget the password?
            </Link>
            <Form.Item<FieldType> className="absolute bottom-10 m-5">
              <Button
                className="text-green-400 block w-[200px] h-[60px] text-4xl font-black rounded-[30px] bg-gradient-to-l from-[#9c88ff] to-[#3cadeb] text-center"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
