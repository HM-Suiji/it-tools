export const ToolTextArea: React.FC<{
  children?: React.ReactNode
  title: string
  className?: string
  extraStyle?: boolean
}> = ({ children, title, className, extraStyle }) => {
  return (
    <div
      className={
        'mb-4 text-left ' + className + (extraStyle ? ' p-4 bg-[#f8f9fa]' : '')
      }
    >
      <div className="font-bold">{title}</div>
      {children}
    </div>
  )
}
