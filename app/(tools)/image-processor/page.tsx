'use client'

import { useState } from 'react'
import { Upload, Input, Button, message } from 'antd'
import type {
	RcFile,
	UploadChangeParam,
	UploadFile,
} from 'antd/lib/upload/interface'

const ImageProcessor = () => {
	const [imageUrl, setImageUrl] = useState('')
	const [base64String, setBase64String] = useState('')

	// 处理图片上传事件
	const handleImageUpload = (info: UploadChangeParam<UploadFile>) => {
		if (info.file.status === 'done') {
			// 读取图片文件并转换为base64格式
			const reader = new FileReader()
			reader.readAsDataURL(info.file.originFileObj as RcFile)
			reader.onload = () => {
				const base64 = reader.result
				setImageUrl(base64 as string)
				message.success('图片转换成功！')
			}
		}
	}

	// 处理base64字符串输入事件
	const handleBase64InputChange = (e: { target: { value: any } }) => {
		const inputBase64 = e.target.value
		setBase64String(inputBase64)
		setImageUrl(inputBase64) // 在输入框中直接显示base64图片
	}

	return (
		<div>
			{/* 图片上传 */}
			<Upload
				name="avatar"
				showUploadList={false}
				onChange={handleImageUpload}
				beforeUpload={(file) => {
					// 阻止上传到服务器
					return false
				}}>
				<Button>选择图片</Button>
			</Upload>

			<br />

			{base64String}

			{/* 显示上传的图片 */}
			{imageUrl && (
				<img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
			)}

			<br />
			<br />

			{/* 输入base64字符串并显示图片 */}
			<Input
				placeholder="输入base64字符串"
				onChange={handleBase64InputChange}
				value={base64String}
			/>

			<br />

			{/* 显示输入的base64图片 */}
			{base64String && (
				<img src={base64String} alt="Base64" style={{ maxWidth: '100%' }} />
			)}
		</div>
	)
}

export default ImageProcessor
