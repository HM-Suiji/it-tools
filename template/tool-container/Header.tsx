import { LikeFilled } from '@ant-design/icons'

const Header = () => (
	<div className="tool-meta">
		<ul>
			<li className="add-favorite">
				<i className="add-favorite-btn"></i>
				<span>收藏工具</span>
			</li>
			<li className="qrcode">
				<i className="iconfont icon-qrcode"></i>
				<span>工具二维码</span>
			</li>
			<li className="support">
				<LikeFilled />
				<span>打赏支持</span>
			</li>
			<li
				className="js-copy"
				data-clipboard-text="https://uutool.cn/uuid/"
				data-clipboard-tip="工具链接已复制，去分享给朋友吧~">
				<i className="iconfont icon-fenxiang"></i>
				<span>分享工具</span>
			</li>
			<li>
				<a href="/feedback.html?site=uukit.com" target="_blank">
					<i className="iconfont icon-kefu"></i>
					<span>反馈建议</span>
				</a>
			</li>
			<li>
				<a href="/api/download/app/?tool=uuid" target="_blank">
					下载客户端
				</a>
			</li>
		</ul>
	</div>
)
