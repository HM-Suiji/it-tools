import { useInstantSearch } from 'react-instantsearch'

export const NoResults = () => {
	const { indexUiState } = useInstantSearch()

	return (
		<div>
			<p>
				No results for <q>{indexUiState.query}</q>.
			</p>
		</div>
	)
}
