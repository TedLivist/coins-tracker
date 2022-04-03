import React, { useEffect, useState } from 'react'
import { coinSelect } from '../../helpers/coinSelect'

const CoinConverter = (props) => {

  const {coinPrice, otherCurrencies} = props
  const [selectState, setSelectState] = useState([])

  const selectObj = []

  useEffect(() => {
    setSelectState(coinSelect(otherCurrencies))
  }, [])

  return (
    <div>Haha</div>
  );
}
 
export default CoinConverter;