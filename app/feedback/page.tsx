'use client'

import { GlobalHeader } from '@/components'
import { Button, Form, Input } from 'antd'

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

type FieldType = {
  topic?: string
  details?: string
  link?: string
  email?: string
}

const Feedback: React.FC = () => {
  return (
    <>
      <GlobalHeader />
      <div className="container flex m-10 mx-20 flex-col w-full">
        <h1 className="text-2xl w-full text-center">反馈建议</h1>
        <div className="text-xl m-4">
          如果在工具的使用过程中，遇到工具无法使用，或有其它想法或建议，欢迎反馈给我们，帮助我们更好地完善工具或解决新需求。
        </div>
        <div className="text-xl mt-4 px-4 py-2 bg-[#f7e4e1]">
          如遇到问题，建议优先使用QQ或微信联系在线客服获取帮助，您将会更快更及时地得到回复。
        </div>
        <div className="grid grid-cols-4 mt-4">
          <div className="col-span-3 flex">
            <Form
              className="w-full"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              反馈主题：
              <Form.Item<FieldType> name="topic">
                <Input placeholder="反馈关于什么" />
              </Form.Item>
              反馈内容：
              <Form.Item<FieldType> name="details">
                <Input.TextArea
                  className="!min-h-[160px]"
                  placeholder="反馈的具体内容"
                />
              </Form.Item>
              链接地址：
              <Form.Item<FieldType> name="link">
                <Input placeholder="本次反馈涉及的工具链接" />
              </Form.Item>
              您的邮箱：
              <Form.Item<FieldType> name="email">
                <Input placeholder="怎么联系您" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#1779ba] w-full py-2 h-auto"
                >
                  提交反馈
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="mx-6">
            <div>
              <a
                href="https://wpa.qq.com/msgrd?v=3&uin=1704802092&site=qq&menu=yes&jumpflag=1"
                target="_blank"
                className="text-[#1468a0]"
              >
                QQ：1704802092
              </a>
            </div>
            <div>微信：穗积（HM_SYsuiji）</div>
            <div>
              邮箱：
              <a href="mailto:1704802092@qq.com" className="text-[#1468a0]">
                1704802092@qq.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback
