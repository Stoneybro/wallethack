import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const Footer = () => {
  return (
    <footer>
    <div className='footerbar'>
    <div className='footer-logo'><Image src={'/icons/footer-logo.svg'} width={150} height={50} alt={'logo (wallet hack)'}/></div>
    <div className='footer-links'>
      <Link href={'#'}>Features</Link>
      <Link href={'#'}>Hack Tokens</Link>
      <Link href={'#'}>FaQs</Link>
    </div>
        <div className="footer-socials">
            <Link href={'#'}><Image src={'/icons/Social.svg'} width={30} height={30} /></Link>
            <Link href={'#'}><Image src={'/icons/medium-logo.svg'} width={30} height={30} /></Link>
            <Link href={'#'}><Image src={'/icons/reddit.svg'} width={30} height={30} /></Link>
            <Link href={'#'}><Image src={'/icons/youtube-logo.svg'} width={30} height={30}/></Link>
        </div>
    </div>
        <div className='footertext'>2023 Wallethack</div>
        </footer>
  )
}

export default Footer