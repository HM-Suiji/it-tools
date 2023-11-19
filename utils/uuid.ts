import { v4 as uuid } from 'uuid'

const createUuid = (time: number = 1) => {
	const result: string[] = []
	for (let i = 0; i < time; i++) {
		result.push(uuid())
	}
	return result
}

export { createUuid }
