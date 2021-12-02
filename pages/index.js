import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Spotify | Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='h-screen bg-black overflow-hidden'>
				<main className=''>
					{/* sidebar */}
					<Sidebar />
					{/* app center */}
				</main>
				<footer>{/* player */}</footer>
			</div>
		</div>
	)
}
