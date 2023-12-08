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
import './index.scss'
import { useState } from 'react'

const algoliaClient = algoliasearch(
	'KH1UIFB7HU',
	'e99483eba93d309d2e97a48d4f80ea2b'
)

const searchClient = {
	...algoliaClient,
	search(requests) {
		if (requests.every(({ params }) => !params?.query?.trim())) {
			return Promise.resolve({
				results: requests.map(() => ({
					hits: [],
					nbHits: 0,
					nbPages: 0,
					page: 0,
					processingTimeMS: 0,
					hitsPerPage: 0,
					exhaustiveNbHits: false,
					query: '',
					params: '',
				})),
			})
		}
		return algoliaClient.search(requests)
	},
} as SearchClient

// TODO: 添加缓存 - store map
export const Search: React.FC = () => {
	const [showResult, setShowResult] = useState(false)

	return (
		<div className="ais-search">
			<InstantSearchNext
				indexName="dev_NAME"
				searchClient={searchClient}
				routing
				insights
				future={{ preserveSharedStateOnUnmount: true }}>
				<SearchBox
					autoFocus
					onFocus={() => setShowResult(true)}
					onBlur={() => setShowResult(false)}
				/>
				{showResult && (
					<div className="ais-result">
						<EmptyQueryBoundary fallback={null}>
							<NoResultsBoundary fallback={<NoResults />}>
								<Hits hitComponent={Hit} />
							</NoResultsBoundary>
						</EmptyQueryBoundary>
					</div>
				)}
			</InstantSearchNext>
		</div>
	)
}
