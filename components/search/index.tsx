'use client'
import { AlgoliaDataItem } from '@/types/AlgoliaDataItem'
import algoliasearch from 'algoliasearch/lite'
import {
	SearchBox,
	Hits,
	Highlight,
	useInstantSearch,
} from 'react-instantsearch'
import { InstantSearchNext } from 'react-instantsearch-nextjs'
import 'instantsearch.css/themes/satellite-min.css'
import Link from 'next/link'

const searchClient = algoliasearch(
	'KH1UIFB7HU',
	'e99483eba93d309d2e97a48d4f80ea2b'
)

const Hit: React.FC<{ hit: AlgoliaDataItem }> = ({ hit }) => (
	<article className="uni-Hit">
		<Link href={`/${hit.path}`} className="text-xl">
			<Highlight attribute="title" hit={hit as any} />
		</Link>
		<p>
			<Highlight attribute="decision" hit={hit as any} />
		</p>
		<p>
			<Highlight attribute="content" hit={hit as any} />
		</p>
	</article>
)

const NoResultsBoundary = ({
	children,
	fallback,
}: {
	children: React.ReactNode
	fallback: React.ReactNode
}) => {
	const { results } = useInstantSearch()

	// The `__isArtificial` flag makes sure not to display the No Results message
	// when no hits have been returned.
	if (!results.__isArtificial && results.nbHits === 0) {
		return (
			<>
				{fallback}
				<div hidden>{children}</div>
			</>
		)
	}

	return children
}

const NoResults = () => {
	const { indexUiState } = useInstantSearch()

	return (
		<div>
			<p>
				No results for <q>{indexUiState.query}</q>.
			</p>
		</div>
	)
}

export const Search: React.FC = () => {
	return (
		<InstantSearchNext
			indexName="dev_NAME"
			searchClient={searchClient}
			routing
			insights
			future={{ preserveSharedStateOnUnmount: true }}>
			<SearchBox autoFocus />
			<NoResultsBoundary fallback={<NoResults />}>
				<Hits hitComponent={Hit} />
			</NoResultsBoundary>
		</InstantSearchNext>
	)
}
