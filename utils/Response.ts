import { status } from '@/types/status.enum'

export class Response {
	status: status = 200
	data: any
	msg?: string
	constructor(data: any, status: status, msg?: string) {
		this.data = data
		this.status = status
		this.msg = msg
	}
}
