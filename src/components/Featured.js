import React, {useState, useEffect} from 'react'
import '../styles/Featured.css'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'
import axios from 'axios'

function Featured() {

  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  if (!data) return null

  return (
    <div className='featured'>
      <div className='container'>

        <div className='left'>
          <h2>Explore top Cryptocurrencies like Bitcoin, Ethereum and many more</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See More Coins</button>
        </div>

        <div className='right'>

          <div className='card'>
          <div className='top'>
            <img src={data[0].image} alt='/' />
          </div>
          <div>
            <h5>{data[0].name}</h5>
            <p>${data[0].current_price.toLocaleString()}</p>
          </div>

          {data[0].price_change_percentage_24h < 0 ? (
            <span className='red'>
              <FaArrowDown />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className='green'>
              <FaArrowUp />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
        
          
          <div className='card'>
          <div className='top'>
            <img src={data[1].image} alt='/' />
          </div>
          <div>
            <h5>{data[1].name}</h5>
            <p>${data[1].current_price.toLocaleString()}</p>
          </div>

          {data[1].price_change_percentage_24h < 0 ? (
            <span className='red'>
              <FaArrowDown />
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className='green'>
              <FaArrowUp />
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
        
          
          <div className='card'>
          <div className='top'>
            <img src={data[2].image} alt='/' />
          </div>
          <div>
            <h5>{data[2].name}</h5>
            <p>${data[2].current_price.toLocaleString()}</p>
          </div>

          {data[2].price_change_percentage_24h < 0 ? (
            <span className='red'>
              <FaArrowDown />
              {data[2].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className='green'>
              <FaArrowUp />
              {data[2].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
        
          
          <div className='card'>
          <div className='top'>
            <img src={data[3].image} alt='/' />
          </div>
          <div>
            <h5>{data[3].name}</h5>
            <p>${data[3].current_price.toLocaleString()}</p>
          </div>

          {data[3].price_change_percentage_24h < 0 ? (
            <span className='red'>
              <FaArrowDown />
              {data[3].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className='green'>
              <FaArrowUp />
              {data[3].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
        
          
          <div className='card'>
          <div className='top'>
            <img src={data[4].image} alt='/' />
          </div>
          <div>
            <h5>{data[4].name}</h5>
            <p>${data[4].current_price.toLocaleString()}</p>
          </div>

          {data[4].price_change_percentage_24h < 0 ? (
            <span className='red'>
              <FaArrowDown />
              {data[4].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className='green'>
              <FaArrowUp />
              {data[4].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
          

          <div className='card'>
          <div className='top'>
            <img src={data[5].image} alt='/' />
          </div>
          <div>
            <h5>{data[5].name}</h5>
            <p>${data[5].current_price.toLocaleString()}</p>
          </div>

          {data[5].price_change_percentage_24h < 0 ? (
            <span className='red'>
              <FaArrowDown />
              {data[5].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className='green'>
              <FaArrowUp />
              {data[5].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
        </div>
        </div>

      </div>
    </div>
  )
}

export default Featured