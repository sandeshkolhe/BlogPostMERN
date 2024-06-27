import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import FaMoon from 'react-icons/fa'
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const path = useLocation().pathname;
  return (
    <>
    <Navbar className='border-b-2'>
        <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>sandesh's </span>
            Blog 
            {/* <SearchIcon />
             */}
            

        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                // rightIcon={faSearch}
            ></TextInput>
            
        </form>

        <Button className='w-12 h-20 lg:hidden' color='gray' pill>
            {/* button */}
        <FontAwesomeIcon icon={faSearch} />
        </Button>

        <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill >
        <FontAwesomeIcon icon={faMoon} />
        </Button>
        <Button gradientDuoTone='purpleToBlue'>
            Sign In
        </Button>
        </div>
        <Navbar.Toggle/>

        <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
                <Link to='/'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'} >
                <Link to='/about'>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'}>
                <Link to='/projects'>Projects</Link>
            </Navbar.Link>
            
        </Navbar.Collapse>

    </Navbar>
    </>
  )
}
