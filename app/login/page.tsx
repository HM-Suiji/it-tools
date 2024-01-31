import { Button } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import LoginImg from '@/assets/img/login-bg.jpg'
import './index.scss'

const Login: React.FC = () => {
  return (
    <div className="login-container h-screen w-screen bg-gradient-to-l from-[#9c88ff] to-[#3cadeb] flex justify-center">
      <div className="relative top-24 w-3/4 h-3/4 shadow-lg shadow-[rgba(0,0,0,.8)]">
        <Image className="absolute z-0" src={LoginImg} fill alt="" />
        <div className="flex flex-col absolute z-10 w-1/3 h-full bg-white right-0 justify-center items-center">
          <h1 className="text-4xl font-black">Login/Register</h1>
          <input type="text" className="input" placeholder="USER NAME" />
          <input type="text" className="input" placeholder="ACCOUNT" />
          <input type="password" className="input" placeholder="PASSWORD" />
          <Link href="#" className="float-right my-[10px]">
            Forget the password?
          </Link>
          <Button className="g">Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
