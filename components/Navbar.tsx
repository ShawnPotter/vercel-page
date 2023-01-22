import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Navbar() {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return(
		<div className='fixed w-full h-20 shadow-xl z-[100]'>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Image 
					src="" 
					alt="" 
				/>
				<div>
					<ul className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
						</Link>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
						</Link>
					</ul>
					<div className='md:hidden'>
						<AiOutlineMenu onClick={handleNav} size={25}/>
					</div>
				</div>
			</div>
			
			<div className={nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/50' : ''}>
				<div 
					className={
						nav 
							? 'fixed right-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-gray-800 p-10 ease-in duration-500' 
							: 'fixed right-[-100%] top-0 p-10 ease-in duration-500'
					}>
					<div className='flex w-full items-center justify-between'>
						<Image 
							src=''
							alt=''
						/>
						<div onClick={handleNav} className='rounded-full shadow shadow-black p-3 cursor-pointer'>
							<AiOutlineClose size={25} />
						</div>
					</div>
					<div className='border-b border-gray-300 my-4'>
						<p className='w-[85%] md:w-[90%] py-4'></p>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							<Link href='/'>
								<li className='py-4 text-sm'>Home</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>About</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Skills</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Projects</li>
							</Link>
							<Link href='/'>
								<li className='py-4 text-sm'>Contact</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-white'>Connect With Me</p>
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaLinkedin/>
								</div>
								<div className='rounded-full shadow shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaGithub/>
								</div>
								<div className='rounded-full shadow shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<AiOutlineMail/>
								</div>
								<div className='rounded-full shadow shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<BsFillPersonLinesFill/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}