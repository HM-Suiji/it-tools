'use client'
import { AlgoliaDataItem } from '@/types/AlgoliaDataItem'
import algoliasearch from 'algoliasearch/lite'
import { SearchBox, Hits } from 'react-instantsearch'
import { InstantSearchNext } from 'react-instantsearch-nextjs'

const searchClient = algoliasearch(
	'KH1UIFB7HU',
	'e99483eba93d309d2e97a48d4f80ea2b'
)

const Hit: React.FC<{ hit: AlgoliaDataItem }> = ({ hit }) => (
	<article className="hit">
		<span>
			<p>{hit.title}</p>
			<p>{hit.decision}</p>
			<p>{hit.content}</p>
		</span>
	</article>
)

export const Search: React.FC = () => {
	return (
		<InstantSearchNext
			indexName="dev_NAME"
			searchClient={searchClient}
			routing
			future={{ preserveSharedStateOnUnmount: true }}>
			<SearchBox />
			<Hits hitComponent={Hit} />
		</InstantSearchNext>
	)
}
