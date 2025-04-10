import { SignedIn, UserButton } from '@clerk/nextjs'
import { CodeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import DashboardBtn from './DashboardBtn'

const Navbar = () => {
  return (
    <nav className='border-b'>
        <div className='flex h-16 items-center px-4 container mx-auto'>
            {/* left side  */}
            <Link href={"/"} className='flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity'>
            <CodeIcon className='size-8 text-emerald-500'/>
            <div className='bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent'>CodeSync</div>
            </Link>
            {/* right side  */}
            <SignedIn>
                <div className='flex items-center space-x-4 ml-auto'>
                    <DashboardBtn/>
                    <ModeToggle/>
                    <UserButton/>
                </div>
            </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar

