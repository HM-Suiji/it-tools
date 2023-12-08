import algoliasearch from 'algoliasearch'
import { getAllRoutesData } from '@/utils' // 获取应用程序路由信息的自定义函数

export async function getStaticProps() {
	const allRoutesData = getAllRoutesData()

	const dataForAlgolia = allRoutesData.map((route) => ({
		objectID: route.id,
		title: route.title,
		content: route.content,
		description: route.description,
		// 其他页面数据...
	}))

	// 上传到 Algolia
	await uploadToAlgolia(dataForAlgolia)

	return {
		props: {
			dataForAlgolia,
		},
	}
}

export default function AlgoliaSync({ dataForAlgolia }) {
	// 这个页面可以为空，因为它只用于处理数据同步
	return null
}

async function uploadToAlgolia(dataForAlgolia) {
	const client = algoliasearch('YOUR_APP_ID', 'YOUR_ADMIN_API_KEY')
	const index = client.initIndex('your_index_name')

	index.saveObjects(dataForAlgolia, (err, content) => {
		if (err) {
			console.error(err)
			return
		}
		console.log('Data has been uploaded to Algolia:', content)
	})
}
