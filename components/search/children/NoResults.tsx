import { useInstantSearch } from 'react-instantsearch'

export const NoResults = () => {
	const { indexUiState } = useInstantSearch()

	return (
		<div className="bg-white p-6">
			<p>
				No results for <q>{indexUiState.query}</q>.
			</p>
		</div>
	)
}
