const Tag: React.FC<{ params: { tag: string } }> = ({ params: { tag } }) => {
	return <>Tag-{decodeURIComponent(tag)}</>
}

export default Tag
