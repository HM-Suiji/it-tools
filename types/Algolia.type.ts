export type AlgoliaDataItem = {
	objectID: number
	path: string
	title: string
	content: string
	decision: string
}

export type AlgoliaComponentProps = {
	children: React.ReactNode
	fallback: React.ReactNode
}
