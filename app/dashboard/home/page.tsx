import {
  EyeOutlined,
  MessageOutlined,
  ToolOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar } from 'antd'

const Card: React.FC<{
  icon: React.ReactNode
  title: string
  number: number
}> = ({ icon, title, number }) => (
  <div className="flex bg-white p-6 items-center">
    <Avatar size="large" icon={icon} className="bg-[#f3f4f6]" />
    <div className="ml-2 flex flex-col">
      <span className="text-xs text-[#6b7280]">{title}</span>{' '}
      <span className="text-2xl">{number}</span>
    </div>
  </div>
)

const DashboardHome: React.FC = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-2 w-full">
        <Card
          title="工具"
          icon={<ToolOutlined className="text-[#4b5563]" />}
          number={10}
        />
        <Card
          title="用户"
          icon={<UserOutlined className="text-[#4b5563]" />}
          number={10}
        />
        <Card
          title="评论"
          icon={<MessageOutlined className="text-[#4b5563]" />}
          number={10}
        />
        <Card
          title="浏览量"
          icon={<EyeOutlined className="text-[#4b5563]" />}
          number={10}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 w-full mt-2">
        <div className="bg-white h-[200px]">aa</div>
        <div className="bg-white h-[200px]">aa</div>
      </div>
    </div>
  )
}

export default DashboardHome
