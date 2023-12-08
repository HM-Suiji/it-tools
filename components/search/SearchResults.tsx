import Link from 'next/link'

import { trimmedStringToLength } from '@/utils'

interface ISearchResultProps {
	hit: {
		product_image: string
		product_name: string
		regular_price: string
		sale_price: string
		on_sale: boolean
		short_description: string
		objectID: number
	}
}

const SearchResults = ({
	hit: {
		product_image,
		product_name,
		regular_price,
		sale_price,
		on_sale,
		short_description,
		objectID,
	},
}: ISearchResultProps) => {
	// Replace empty spaces with dash (-)
	const trimmedProductName = product_name.replace(/ /g, '-')

	return (
		<article className="cursor-pointer hit">
			<Link
				href="/produkt/[post]"
				as={`/produkt/${trimmedProductName}?id=${objectID}`}
				passHref>
				<div className="flex p-6 bg-white">
					<header className="hit-image-container">
						<img
							src={product_image}
							alt={product_name}
							className="w-12 hit-image"
						/>
					</header>
					<div className="pl-4 text-left">
						{product_name && (
							<span className="text-lg font-bold">{product_name}</span>
						)}
						<br />
						{on_sale && (
							<>
								<span className="text-base line-through">
									kr {regular_price}
								</span>
								<span className="ml-2 text-base">kr {sale_price}</span>
							</>
						)}
						{!on_sale && <span className="text-base">kr {regular_price}</span>}
						<br />
						<span className="text-base">
							{trimmedStringToLength(short_description, 30)}
						</span>
					</div>
				</div>
			</Link>
		</article>
	)
}

export default SearchResults
