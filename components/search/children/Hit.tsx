import { AlgoliaDataItem } from '@/types/Algolia.type'
import Link from 'next/link'
import { Highlight } from 'react-instantsearch'

export const Hit: React.FC<{ hit: AlgoliaDataItem }> = ({ hit }) => (
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
