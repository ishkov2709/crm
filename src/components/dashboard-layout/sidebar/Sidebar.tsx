import Link from 'next/link'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sodebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout bo border-b border-b-border'
					draggable={false}
				></Link>
			</div>
		</aside>
	)
}
