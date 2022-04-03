import React, { useEffect, useState } from 'react'

const CoinConverter = (props) => {

  const {coinPrice, otherCurrencies} = props
  const [selectState, setSelectState] = useState([])

  const selectObj = []

  useEffect(() => {
    for (const item in otherCurrencies) {
      if (item === "usd" || item === "eur") {
        let itemValue = otherCurrencies[item]
        let items = {item, itemValue}
        selectObj.push(items)
      }
    }
    setSelectState(selectObj)
  }, [])

  console.log(selectState)

  return (
    <div>Haha</div>
  );
}
 
export default CoinConverter;