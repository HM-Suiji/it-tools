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
    <SyntaxHighlighter
      showLineNumbers // 是否展示左侧行数
      lineNumberStyle={{ color: '#ddd', fontSize: 10 }} // 左侧行数的样式
      style={theme === 'dark' ? Theme.dark : Theme.light} // 主题风格
      language={language} // 需要语言类型 如css, jsx , javascript 等
      PreTag="div"
    >
      {code}
    </SyntaxHighlighter>
  )
}
