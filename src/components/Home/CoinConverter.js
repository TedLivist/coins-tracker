import React, { useEffect, useState } from 'react'
import { coinSelect } from '../../helpers/coinSelect'

const CoinConverter = (props) => {

  const {otherCurrencies, tokenSymbol} = props
  const [selectState, setSelectState] = useState([])

  const [coinValue, setCoinValue] = useState(0)
  const [currencyValue, setCurrencyValue] = useState(0)
  const [selectValue, setSelectValue] = useState('')

  useEffect(() => {
    setSelectState(coinSelect(otherCurrencies))
  }, [otherCurrencies])

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
    <div className='px-3 mb-3 py-3 rounded-xl bg-black'>
      <h2 className='text-center text-white'>Converter</h2>
      <div className=''>
        <div className='grid xs:mb-2 grid-cols-3'>
          <div className='border-2 border-neutral-900 bg-white border-r-0 rounded-l-xl text-center px-3 py-2 font-bold'>{tokenSymbol.toUpperCase()}</div>
          <input type='number' className={`${selectValue === '' ? 'bg-gray-400' : 'bg-slate-100'} outline-none rounded-r-xl px-3 py-2 border-2 border-neutral-900 border-l-0 text-xl font-bold col-span-2`} onChange={handleCoinChange} value={coinValue} disabled={selectCheck(selectValue)} />
        </div>

        <div className='grid grid-cols-3'>
          <select onChange={handleSelectChange} className='border-2 border-neutral-900 border-r-0 outline-none rounded-l-xl text-center px-3 py-2 font-bold text'>
            <option value="">Select Currency---</option>
            {selectState.map(({item, itemValue}) => (
              <option key={item} className='' value={itemValue}>{item.toUpperCase()}</option>        
            ))}
          </select>
          <input type='number' className={`${selectValue === '' ? 'bg-gray-400' : 'bg-slate-100'} rounded-r-xl outline-none px-3 py-2 border-2 border-neutral-900 border-l-0 text-xl font-bold col-span-2`} onChange={handleCurrencyChange} value={currencyValue} disabled={selectCheck(selectValue)} />
        </div>
      </div>
    </div>
  );
}
 
export default CoinConverter;