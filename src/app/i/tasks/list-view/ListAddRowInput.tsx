import { Dispatch, SetStateAction } from 'react'

import { ITaskResponse } from '@/types/task.types'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export default function ListAddRowInput() {
	const addRow = () => {}
	return <></>
}
