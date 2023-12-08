import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch'
import { useState } from 'react'

import SearchResults from './SearchResults'

const searchClient = algoliasearch(
	'KH1UIFB7HU',
	'e99483eba93d309d2e97a48d4f80ea2b'
)

const AlgoliaSearchBox = () => {
	const [search, setSearch] = useState<string | null>(null)
	const [hasFocus, sethasFocus] = useState<boolean>(false)

	return (
		<div className="hidden mt-2 md:inline xl:inline">
			<div className="">
				<InstantSearch indexName={'dev_NAME'} searchClient={searchClient}>
					{/*We need to conditionally add a border because the element has position:fixed*/}
					<SearchBox
						aria-label="Søk her"
						// translations={{
						// 	submitTitle: 'Søk',
						// 	resetTitle: 'Slett søketekst',
						// 	placeholder: 'Søk etter produkter',
						// }}
						className={`px-4 py-2 text-base bg-white border outline-none rounded ${
							hasFocus ? 'border-black' : 'border-gray-400'
						}`}
						onChange={(event: Event) => {
							const target = event.target as HTMLInputElement
							sethasFocus(true)
							setSearch(target.value)
						}}
						onKeyDown={(event) => {
							const target = event.target as HTMLInputElement
							sethasFocus(true)
							setSearch(target.value)
						}}
						onReset={() => {
							setSearch(null)
						}}
					/>
					{search && (
						<div className="absolute">
							<Hits hitComponent={SearchResults} />
						</div>
					)}
				</InstantSearch>
			</div>
		</div>
	)
}

export default AlgoliaSearchBox
