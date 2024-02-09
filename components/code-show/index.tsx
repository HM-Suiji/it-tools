import { CopyOutlined } from '@ant-design/icons'
import { message } from 'antd'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  vscDarkPlus,
  darcula,
} from 'react-syntax-highlighter/dist/esm/styles/prism'

const Theme = {
  dark: vscDarkPlus,
  light: darcula,
}

export const CodeShow: React.FC<{
  code: string
  theme?: 'light' | 'dark'
  language: 'jsx' | 'css' | 'html' | 'javascript'
}> = ({ code, theme = 'dark', language }) => {
  return (
    <div className="code-box relative">
      <SyntaxHighlighter
        showLineNumbers // 是否展示左侧行数
        lineNumberStyle={{ color: '#ddd', fontSize: 10 }} // 左侧行数的样式
        style={theme === 'dark' ? Theme.dark : Theme.light} // 主题风格
        language={language} // 需要语言类型 如css, jsx , javascript 等
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
      <button
        className="absolute top-2 right-2"
        onClick={() =>
          navigator.clipboard
            .writeText(code)
            .then(() => message.success('复制成功'))
            .catch(() => message.error('复制失败,请重试或尝试手动复制'))
        }
      >
        <CopyOutlined className="text-gray-300 text-xl" />
      </button>
    </div>
  )
}
