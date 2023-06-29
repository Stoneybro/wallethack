import React from 'react'
import Image from 'next/image'

const Features = () => {
  return (
   <main className='features'>
    <div className="feature">
        <div className="feature-content">
        <div className="feature-content-large green">The Safest Architecture</div>
        <div className="feature-content-small">Only you can sign transactions with a WalletConnect’ed app like xBull or Lobstr. 
            We never even see your secrets.</div>
        </div>
        <Image className='feature-content' />
    </div>

    <div className="feature ">
        <div className="feature-content">
        <div className="feature-content-large blue">Automate the Stellar DEX</div>
        <div className="feature-content-small">Our drag and drop interface simplifies trading and can trigger your preset offers.</div>
        </div>
        <Image className='feature-content ' />
    </div>

    <div className="feature">
        <div className="feature-content">
            <div className="feature-content-large indigo">For a fraction of a HACK</div>
            <div className="feature-content-small">Simply hold HACK tokens and pay a very small fee to make a transaction.</div>
        </div>
        <Image className='feature-content' />
    </div>
   </main>
  )
}

export default Features