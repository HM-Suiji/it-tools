import { getMetaData } from '@/utils'
import { Metadata } from 'next'
import { mathSolver } from '@/assets/json/tools.json'

export const metadata: Metadata = getMetaData({
	title: mathSolver[0],
	keywords: mathSolver[1],
	description: mathSolver[2],
})

const MathSolverContainer: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <>{children}</>
}

export default MathSolverContainer
