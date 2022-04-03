import React, { useEffect, useState } from 'react'
import { coinSelect } from '../../helpers/coinSelect'

const CoinConverter = (props) => {

  const {coinPrice, otherCurrencies} = props
  const [selectState, setSelectState] = useState([])

  const [coinValue, setCoinValue] = useState(0)
  const [currencyValue, setCurrencyValue] = useState(0)
  const [selectValue, setSelectValue] = useState('')

  useEffect(() => {
    setSelectState(coinSelect(otherCurrencies))
  }, [])

  const handleCoinChange = (e) => {
    setCoinValue(e.target.value)
    const calc = e.target.value * selectValue
    setCurrencyValue(calc.toFixed(4))
  }

  const handleSelectChange = (e) => {
    setSelectValue(e.target.value)
  }

  const handleCurrencyChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className='converter-wrapper'>
      <input type='number' onChange={handleCoinChange} value={coinValue} />

      <div className='currency-input'>
        <select onChange={handleSelectChange}>
          <option>---Select Currency---</option>
          {selectState.map(({item, itemValue}) => (
            <option key={item} value={itemValue}>{item.toUpperCase()}</option>        
          ))}
        </select>
        <input type='number' onChange={handleCurrencyChange} value={currencyValue} />
      </div>
    </div>
  );
}
 
export default CoinConverter;