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
    <div className='grid grid-cols-2 gap-4'>
      <input type='number' className="w-10/12 ml-auto h-16 font-bold text-3xl px-4 rounded-2xl bg-stone-400" onChange={handleCoinChange} value={coinValue} disabled={selectCheck(selectValue)} />

      <div className="flex justify-start mr-auto">
        <select onChange={handleSelectChange} className="w-3/12 bg-amber-500 pl-4 text-2xl rounded-2xl font-bold">
          <option value="">---Select Currency---</option>
          {selectState.map(({item, itemValue}) => (
            <option key={item} className='bg-emerald-700 text-xl font-bold' value={itemValue}>{item.toUpperCase()}</option>        
          ))}
        </select>
        <input type='number' className="w-7/12 h-16 bg-slate-400 font-bold text-3xl px-4 rounded-2xl" onChange={handleCurrencyChange} value={currencyValue} disabled={selectCheck(selectValue)} />
      </div>
    </div>
  );
}
 
export default CoinConverter;