export const ToolTextArea: React.FC<{
  children: React.ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <div className="mb-4 text-left">
      <div className="font-bold">{title}</div>
      {children}
    </div>
  )
}
