import React, { useState } from 'react';
import getCoin from '../helpers/getCoin';

const SearchCoin = () => {

  const [coinItem, setCoinItem] = useState('')
  const [error, setError] = useState('')

  const handleSearch = (e) => {
    setCoinItem(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let trimmedCoin = coinItem.trim()
    if (trimmedCoin.length > 0) {
      trimmedCoin = trimmedCoin.replace(/\s/g, '-')
      const data = await getCoin(trimmedCoin)
      console.log(data)
      if (data.error) {
        setError(data.error)
      } else {
        console.log('Coin exists')
        setError('')
      }
    } else {
      console.log('Trimmed: ', trimmedCoin.length)
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="coinItem" value={coinItem} onChange={handleSearch} />
      {error}
      <button type='submit'>Search Coin</button>
    </form>
  );
}
 
export default SearchCoin;