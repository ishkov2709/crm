import { ITimeState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'
import { useUpdateRound } from './useUpdateRound'

export function useTimerActions({
	activeRound,
	setIsRunning,
	secondsLeft
}: ITimeState) {
	const { updateRound, isUpdateRoundPending } = useUpdateRound()

	const pauseHandler = () => {
		const { workInterval } = useLoadSettings()
		const totalSeconds = workInterval * 60 - secondsLeft

		setIsRunning(false)

		if (activeRound?.id)
			updateRound({
				id: activeRound?.id,
				data: {
					totalSeconds,
					isCompleted: Math.floor(totalSeconds * 60) >= workInterval
				}
			})

		const playHandler = () => {
			setIsRunning(true)
		}
	}
	return { isUpdateRoundPending }
}
