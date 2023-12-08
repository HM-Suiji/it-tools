import { AlgoliaComponentProps } from '@/types/Algolia.type'
import { useInstantSearch } from 'react-instantsearch'

export const EmptyQueryBoundary = ({
	children,
	fallback,
}: AlgoliaComponentProps) => {
	const { indexUiState } = useInstantSearch()

	if (!indexUiState.query) {
		return fallback
	}

	return children
}
