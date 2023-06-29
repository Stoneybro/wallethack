import React from 'react'
import Image from 'next/image'
const Hacktoken = () => {
  return (
    <div className="hack">
        <Image/>
        <div className="hack-content">
            <div className="hack-title">HACK TOKEN</div>
            <div className="hack-cards">


            <div className="hack-card">
                <div className="hack-content-large">
                HACK Token Trustline
                </div>
                <div className="hack-content-small">
                Users will need to have a "trustline" to our HACK token. Only HACK token will have a unique issuer ID
                </div>
            </div>


            <div className="hack-card">
                <div className="hack-content-large">
                Acquiring HACK tokens
                </div>
                <div className="hack-content-small">
                Trade USDC for HACK tokens via Stellar's USDC/HACK 
market pair.
                </div>
            </div>


            <div className="hack-card">
                <div className="hack-content-large">
                HACK Token Usage
                </div>
                <div className="hack-content-small">
                Own HACK tokens and be able to pay our platform fee for creating transactions.
                </div>
            </div>


            <div className="hack-card">
                <div className="hack-content-large">
                LOCKUP VAULT 
                    Staking
                </div>
                <div className="hack-content-small">
                A vault with a huge APR will be created for loyal investors who are willing to lock up their token for a period of 3 to 6 months.
                </div>
            </div>


            </div>

            <div className="hack-wallet">
                <div>
                <div className="title">HACK Token issuer ID</div>
                <div className="copy">copy</div>
                </div>
                <div className="hack-address">GAGNGHFGFPOEWNIJCGLB6TYZHJV5YCB3GYGPBB57XQJ3NBUT7DNOMJLI</div>
            </div>
        </div>
    </div>
  )
}

export default Hacktoken