import { Dispatch, SetStateAction } from 'react'

import { IPomodoroRoundResponse } from '@/types/pomodoro.types'

export interface ITimeState {
	secondsLeft: number
	activeRound: IPomodoroRoundResponse
	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
}
