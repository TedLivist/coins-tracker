import React, { useState } from 'react';
import getCoin from '../helpers/getCoin';

const SearchCoin = (props) => {

  const [coinItem, setCoinItem] = useState('')
  const [error, setError] = useState('')
  const [homeCoin, setHomeCoin] = useState('')

  const { parentCallback } = props

  const handleSearch = (e) => {
    setCoinItem(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let trimmedCoin = coinItem.trim()

    if (trimmedCoin.length > 0) {
      trimmedCoin = trimmedCoin.replace(/\s/g, '-')
      const data = await getCoin(trimmedCoin)
      if (data.error) {
        setError(data.error)
      } else {
        setHomeCoin(data.id)
        parentCallback(homeCoin)
      }
    } else {
      setError('Cannot search meaningless coin')  
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   let trimmedCoin = coinItem.trim()
  //   if (trimmedCoin.length > 0) {
  //     trimmedCoin = trimmedCoin.replace(/\s/g, '-')
  //     const data = await getCoin(trimmedCoin)
  //     if (data.error) {
  //       setError(data.error)
  //     } else if (trackedCoins.length < 3) {
  //       dispatch(trackCoin(data))
  //       console.log('Coin has been added')
  //       setError('')
  //     } else {
  //       setError("Can't add more than 3 coins")
  //     }
  //   } else {
  //     setError('Cannot search meaningless coin')
  //   }
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="coinItem" value={coinItem} onChange={handleSearch} />
        {error}
        <button type='submit'>Search Coin</button>
      </form>
      <div>
        <button>{}</button>
      </div>
    </div>
  );
}
 
export default SearchCoin;