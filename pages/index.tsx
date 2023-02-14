import Head from 'next/head'
import Navbar from '../components/Navbar'
import Greeting from '../components/Greeting'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'


export default function Home() 
{
  return (
    <div>
      <Head>
        <title>Shawn Potter | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Greeting/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <div className='flex justify-center pt-6 pb-12'>
				<Link href='/'>
					<div className='shadow shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
						<HiOutlineChevronDoubleUp size={30} />
					</div>
				</Link>
			</div>
    </div>
  )
}
