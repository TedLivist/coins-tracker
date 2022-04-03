import React, { useEffect, useState } from 'react'
import { coinSelect } from '../../helpers/coinSelect'

const CoinConverter = (props) => {

  const {coinPrice, otherCurrencies} = props
  const [selectState, setSelectState] = useState([])

  useEffect(() => {
    setSelectState(coinSelect(otherCurrencies))
  }, [])

  return (
    <div>
      <input type='number' />

      <select>
        {selectState.map(({item, itemValue}) => (
          <option key={item} value={itemValue}>{item.toUpperCase()}</option>        
        ))}
      </select>
    </div>
  );
}
 
export default CoinConverter;