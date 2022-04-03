import React, { useEffect, useState } from 'react'
import { coinSelect } from '../../helpers/coinSelect'

const CoinConverter = (props) => {

  const {otherCurrencies} = props
  const [selectState, setSelectState] = useState([])

  const [coinValue, setCoinValue] = useState(0)
  const [currencyValue, setCurrencyValue] = useState(0)
  const [selectValue, setSelectValue] = useState('')

  useEffect(() => {
    setSelectState(coinSelect(otherCurrencies))
  }, [])

  const handleCoinChange = (e) => {
    setCoinValue(e.target.value)
    const coinToCurr = e.target.value * selectValue
    setCurrencyValue(coinToCurr.toFixed(4))
  }

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value)
    setCoinValue(0)
    setCurrencyValue(0)
  }

  const handleCurrencyChange = (e) => {
    setCurrencyValue(e.target.value)
    const currToCoin = e.target.value / selectValue
    setCoinValue(currToCoin.toFixed(4))
  }

  const selectCheck = (select) => {
    if (select === '') {
      return true
    }
  }

  return (
    <div className='converter-wrapper'>
      <input type='number' onChange={handleCoinChange} value={coinValue} disabled={selectCheck(selectValue)} />

      <div className='currency-input'>
        <select onChange={handleSelectChange}>
          <option>---Select Currency---</option>
          {selectState.map(({item, itemValue}) => (
            <option key={item} value={itemValue}>{item.toUpperCase()}</option>        
          ))}
        </select>
        <input type='number' onChange={handleCurrencyChange} value={currencyValue} disabled={selectCheck(selectValue)} />
      </div>
    </div>
  );
}
 
export default CoinConverter;