import React from 'react'
import '../styles/Featured.css'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'

function Featured() {
  return (
    <div className='featured'>
      <div className='container'>

        <div className='left'>
          <h2>Explore top Cryptocurrencies like Bitcoin, Ethereum and many more</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See More Coins</button>
        </div>

        <div className='right'>
          <div className='top'>
            <img  alt='/' />
          </div>
          <div>
            <h5>Bitcoin</h5>
            <p>$23,496</p>
          </div>
          <span><FaArrowUp />2.5%</span>
        </div>

      </div>
    </div>
  )
}

export default Featured