'use client'
import algoliasearch from 'algoliasearch/lite'
import { SearchBox } from 'react-instantsearch'
import { InstantSearchNext } from 'react-instantsearch-nextjs'

const searchClient = algoliasearch(
	'KH1UIFB7HU',
	'e99483eba93d309d2e97a48d4f80ea2b'
)

export const Search: React.FC = () => {
	return (
		<InstantSearchNext
			indexName="dev_NAME"
			searchClient={searchClient}
			routing
			future={{ preserveSharedStateOnUnmount: true }}>
			<SearchBox />
		</InstantSearchNext>
	)
}
