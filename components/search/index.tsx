'use client'
import algoliasearch, { SearchClient } from 'algoliasearch/lite'
import { SearchBox, Hits } from 'react-instantsearch'
import { InstantSearchNext } from 'react-instantsearch-nextjs'
import 'instantsearch.css/themes/satellite-min.css'
import {
	EmptyQueryBoundary,
	Hit,
	NoResults,
	NoResultsBoundary,
} from './children'

const algoliaClient = algoliasearch(
	'KH1UIFB7HU',
	'e99483eba93d309d2e97a48d4f80ea2b'
)

const searchClient = {
	...algoliaClient,
	search(requests: any) {
		return algoliaClient.search(requests)
	},
} as SearchClient

export const Search: React.FC = () => {
	return (
		<InstantSearchNext
			indexName="dev_NAME"
			searchClient={searchClient}
			routing
			insights
			future={{ preserveSharedStateOnUnmount: true }}>
			<SearchBox autoFocus />
			<EmptyQueryBoundary fallback={null}>
				<NoResultsBoundary fallback={<NoResults />}>
					<Hits hitComponent={Hit} />
				</NoResultsBoundary>
			</EmptyQueryBoundary>
		</InstantSearchNext>
	)
}
