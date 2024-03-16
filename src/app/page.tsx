import Image from 'next/image'

import { Heading } from '@/components/ui/Heading'

import { Statistics } from './i/Statistics'

export default function Home() {
	return (
		<div>
			<Heading title='Statistics' />
			<Statistics />
		</div>
	)
}
