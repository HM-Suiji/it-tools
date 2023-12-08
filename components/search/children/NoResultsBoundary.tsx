import { AlgoliaComponentProps } from '@/types/Algolia.type'
import { useInstantSearch } from 'react-instantsearch'

export const NoResultsBoundary = ({
	children,
	fallback,
}: AlgoliaComponentProps) => {
	const { results } = useInstantSearch()

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
