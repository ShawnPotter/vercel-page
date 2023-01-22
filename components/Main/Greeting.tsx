import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Greeting() {
	return (
		<div className='max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center'>
			<div>
				<p className='uppercase text-sm tracking-widest text-gray-50'>
					let's build something together
				</p>
				<h1 className='py-4 text-gray-50'>
					Hi, I'm Shawn
				</h1>
				<h1 className='py-2 text-gray-50'>
					A Software Engineer
				</h1>
				<p className='py-4 text-gray-100 max-w-[70%] m-auto'>
					I'm a recent software development graduate from Green River College 
					specializing in front-end and full-stack development.
				</p>
				<div className='flex items-center justify-between max-w-xs m-auto py-4'>
					<div className='rounded-full shadow shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
						<FaLinkedin />
					</div>
					<div className='rounded-full shadow shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
						<FaGithub />
					</div>
					<div className='rounded-full shadow shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
						<AiOutlineMail />
					</div>
					<div className='rounded-full shadow shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
						<BsFillPersonLinesFill />
					</div>
				</div>
			</div>
		</div>
	)
}