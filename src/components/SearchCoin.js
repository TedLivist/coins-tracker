import React, { useState } from 'react';
import { getCoin } from '../helpers/getCoin';

const SearchCoin = (props) => {

  const [coinItem, setCoinItem] = useState('')
  const [error, setError] = useState('')

  const { parentCallback, propsCallback } = props

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
        setInterval(() => {
          setError('')
        }, 3000);
      } else {
        propsCallback(data)
        parentCallback(data.id)
      }
    } else {
      setError('Cannot search meaningless coin')
      setInterval(() => {
        setError('')
      }, 3000);
    }
  }

  return (
    <div className='text-center'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="coinItem" value={coinItem} onChange={handleSearch} placeholder="Search coin" className="p-2" />
        <button type='submit'>Search</button>
      </form>
      <div className="text-red-700">
        {error}
      </div>
    </div>
  );
}
 
export default SearchCoin;