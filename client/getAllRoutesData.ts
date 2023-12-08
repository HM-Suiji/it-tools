import tools from '@/assets/json/tools.json'
import { parse } from 'node-html-parser'
import algoliasearch from 'algoliasearch'
import { AlgoliaDataItem } from '@/types/AlgoliaDataItem'

const entries = Object.entries(tools)

const getContent = async (url: string) => {
	const html = await (await fetch(`http://localhost/${url}`)).text()
	const $ = parse(html)
	const text = $.querySelector('.content-algolia')?.text || ''
	return text.trim()
}

export const getAllRoutesData = async () => {
	const algoliaDataItem = await Promise.all(
		entries.map(async (item, index): Promise<AlgoliaDataItem> => {
			return {
				objectID: index + 1,
				title: item[0],
				decision: item[1][2],
				content: await getContent(item[0]),
			}
		})
	)

	return algoliaDataItem
}

export const uploadToAlgolia = async () => {
	console.log(111)
	const client = algoliasearch('KH1UIFB7HU', '207313ceaf39fd7f69507b35623c7a36')
	const index = client.initIndex('dev_NAME')
	console.log(222)
	index.saveObjects(await getAllRoutesData(), (err: any, content: any) => {
		if (err) {
			return console.error(err)
		}
		console.log('Saved: ' + content)
	})
}

// uploadToAlgolia()
