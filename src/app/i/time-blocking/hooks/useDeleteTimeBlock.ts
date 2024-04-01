import { useMutation, useQueryClient } from '@tanstack/react-query'

import { timeBlockService } from '@/api/services/time-block.service'

export function useDeleteTimeBlock(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteTimeBlock, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete time-block', itemId],
		mutationFn: () => timeBlockService.deleteTimeBlock(itemId.toString()),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-block']
			})
		}
	})
	return { deleteTimeBlock, isDeletePending }
}
