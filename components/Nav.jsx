import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Nav = () => {
  return (
    <nav>
    <div className='navbar'>
    <div className='nav-logo'><Image src={'/icons/logo-icon.svg'} width={150} height={50} alt={'logo (wallet hack)'}/></div>
    <div className='nav-links'>
      <Link href={'#'}>Features</Link>
      <Link href={'#'}>Hack Tokens</Link>
      <Link href={'#'}>FaQs</Link>
    </div>
    <button className='button'><Image src={'/icons/button-icon.svg'} width={15} height={15} alt={'logo inside button'} /><span>Trade</span></button>

    </div>
        </nav>
  )
}

export default Nav