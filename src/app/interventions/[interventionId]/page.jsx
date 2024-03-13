import InterventionDetails from '../../components/InterventionDetails'
import Sidebar from '../../components/sidebar'
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react'
/* eslint-enable no-unused-vars */
export default function Page() {
	return (
		<main className="flex bg-white wallpaper w-screen h-screen text-black">
			<Suspense fallback={<div></div>}>
				<Sidebar className="relative" />
			</Suspense>
			<div className="w-full h-full flex items-center justify-center">
				<InterventionDetails />
			</div>
		</main>
	)
}
