import { Layout } from 'antd'
import {
	headerStyle,
	contentStyle,
	footerStyle,
	siderStyle,
} from '@/assets/style/layoutStyle'

const { Header, Footer, Sider, Content } = Layout

const ToolsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<>{children}</>
)

// const ToolsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
// 	return (
// 		<Layout>
// 			<Header style={headerStyle}>Header</Header>
// 			<Layout hasSider>
// 				<Content style={contentStyle}>
// 					<div className="pr-4 pl-4">{children}</div>
// 				</Content>
// 				<Sider style={siderStyle}>Sider</Sider>
// 			</Layout>
// 			<Footer style={footerStyle}>Footer</Footer>
// 		</Layout>
// 	)
// }

export default ToolsLayout
