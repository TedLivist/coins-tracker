import React, { useState } from 'react';

const SearchCoin = () => {

  const [coinItem, setCoinItem] = useState('')

  const handleSearch = (e) => {
    setCoinItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let trimmedCoin = coinItem.trim()
    trimmedCoin = trimmedCoin.replace(/\s/g, '-')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="coinItem" value={coinItem} onChange={handleSearch} />
      <button type='submit'>Search Coin</button>
    </form>
  );
}
 
export default SearchCoin;