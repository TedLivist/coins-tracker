import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import getCoin from '../helpers/getCoin';
import { trackCoin } from '../redux/coins/coins';

const SearchCoin = () => {

  const dispatch = useDispatch()

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
        dispatch(trackCoin(data))
        console.log('Coin exists')
        setError('')
      }
    } else {
      setError('Cannot search meaningless coin')
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