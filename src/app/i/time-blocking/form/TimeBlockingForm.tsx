import { SubmitHandler, useFormContext } from 'react-hook-form'

import { TypeTimeBlockFormState } from '@/types/time-block.types'

import { COLORS } from './colors.data'
import { useCreateTimeBlock } from './useCreateTimeBlock'
import { useUpdateTimeBlock } from './useUpdateTimeBlock'

export function TimeBlockingForm() {
	const { register, control, watch, reset, handleSubmit, getValues } =
		useFormContext<TypeTimeBlockFormState>()

	const existsId = watch('id')

	const { updateTimeBlock } = useUpdateTimeBlock(existsId)
	const { createTimeBlock, isPending } = useCreateTimeBlock()

	const onSubmit: SubmitHandler<TypeTimeBlockFormState> = data => {
		const { color, id, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		if (id) {
			updateTimeBlock({
				id,
				data: dto
			})
		} else {
			createTimeBlock(dto)
		}

		reset({
			color: COLORS[COLORS.length - 1],
			duration: 0,
			name: '',
			id: undefined,
			order: 1
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-3/5'
		>
			<Field
				{...register('name', {
					required: true
				})}
			/>
		</form>
	)
}
