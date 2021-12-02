import {
	HomeIcon,
	LibraryIcon,
	SearchIcon,
	PlusCircleIcon,
	HeartIcon,
	RssIcon,
} from '@heroicons/react/outline'

const Sidebar = () => {
	return (
		<div className='text-gray-500 text-sm p-5 overflow-scroll'>
			<div className='space-y-4'>
				<button className='flex items-center hover:text-white space-x-2'>
					<HomeIcon className='w-5 h-5' />
					<p>Home</p>
				</button>
				<button className='flex items-center hover:text-white space-x-2'>
					<SearchIcon className='w-5 h-5' />
					<p>Search</p>
				</button>
				<button className='flex items-center hover:text-white space-x-2'>
					<LibraryIcon className='w-5 h-5' />
					<p>Your Library</p>
				</button>

				<hr className='border-t-[0.1px] border-gray-500' />

				<button className='flex items-center hover:text-white space-x-2'>
					<PlusCircleIcon className='w-5 h-5 ' />
					<p>Create Playlist</p>
				</button>
				<button className='flex items-center hover:text-white space-x-2'>
					<HeartIcon className='w-5 h-5 ' />
					<p>Liked Songs</p>
				</button>
				<button className='flex items-center hover:text-white space-x-2'>
					<RssIcon className='w-5 h-5 ' />
					<p>Your Episodes</p>
				</button>

				<hr className='border-t-[0.1px] border-gray-500' />

				{/* Playlists... */}
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
				<p className='hover:text-white cursor-pointer'>
					Playlist name...
				</p>
			</div>
		</div>
	)
}

export default Sidebar
