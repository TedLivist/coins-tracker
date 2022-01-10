import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCoin from '../helpers/getCoin';
import { trackCoin } from '../redux/coins/coins';

const SearchCoin = (props) => {

  const dispatch = useDispatch()

  const [coinItem, setCoinItem] = useState('')
  const [error, setError] = useState('')

  const { trackedCoins } = props
  console.log('Tracked Coins: ', trackedCoins)
  console.log(trackedCoins.length)

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
      } else if (trackedCoins.length < 3) {
        dispatch(trackCoin(data))
        console.log('Coin has been added')
        setError('')
      } else {
        setError("Can't add more than 3 coins")
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