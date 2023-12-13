import { Metadata } from 'next'

export const getMetaData = (metaDate: Metadata): Metadata => ({
	...metaDate,
	title: `${metaDate.title} - 幻梦IT工具站`,
})
