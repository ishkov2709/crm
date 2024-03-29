import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTimeBlockFormState } from '@/types/time-block.types'

import { timeBlockService } from '@/api/services/time-block.service'

export function useUpdateTimeBlock() {
	const queryClient = useQueryClient()

	const { mutate: useUpdateTimeBlock, isPending } = useMutation({
		mutationKey: ['update time-block'],
		mutationFn: ({ id, data }: { id: string; data: TypeTimeBlockFormState }) =>
			timeBlockService.updateTimeBlock(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})
	return { useUpdateTimeBlock, isPending }
}
