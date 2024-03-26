import cn from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { IPomodoroRoundResponse } from '@/types/pomodoro.types'

import styles from './PomodoroRounds.module.scss'

interface IPomodoroRounds {
	rounds: IPomodoroRoundResponse[] | undefined
	nextRoundHandler: () => void
	prevRoundHandler: () => void
	activerRound: IPomodoroRoundResponse | undefined
}

export default function PomodoroRounds({
	rounds,
	nextRoundHandler,
	prevRoundHandler,
	activerRound
}: IPomodoroRounds) {
	const isCanPrevRound = rounds
		? rounds.some(round => round.isCompleted)
		: false
	const isCanNextRound = rounds ? !rounds[rounds.length - 1].isCompleted : false

	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				disabled={!isCanPrevRound}
				onClick={() => (isCanPrevRound ? prevRoundHandler() : false)}
			>
				<ChevronLeft size={23} />
			</button>
			<div className={styles.roundsContainer}>
				{rounds?.map((round, index) => (
					<div
						key={index}
						className={cn(styles.round, {
							[styles.comleted]: round.isCompleted,
							[styles.active]:
								round.id === activerRound?.id && !round.isCompleted
						})}
					></div>
				))}
			</div>
			<button
				className={styles.button}
				disabled={!isCanNextRound}
				onClick={() => (isCanNextRound ? nextRoundHandler() : false)}
			>
				<ChevronRight size={23} />
			</button>
		</div>
	)
}
