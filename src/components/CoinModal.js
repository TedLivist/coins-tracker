import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBackendQuantity } from '../helpers/backendMods/updateBackendQuantity';
import { changeQuantity } from '../redux/coins/coins';

const CoinModal = ({ open, coinId, backendCoinId, quantity, userToken, onClose }) => {
  const dispatch = useDispatch()
  const [modalQty, setModalQty] = useState(quantity)


  const handleModalQty = (e) => {
    setModalQty(e.target.value)
  }

  const handleModalSubmit = async (e) => {
    e.preventDefault()

    const coin = await updateBackendQuantity(backendCoinId, coinId, modalQty, userToken)

    if (coin.coin_id) {
      dispatch(changeQuantity({id: coinId, qty: parseFloat(modalQty)}))
      onClose()
    }
  }

  if (!open) return null
  return (
    <div>
      <button onClick={onClose}>Close Modal</button>
      <div>{coinId}</div>
      <div>{quantity}</div>
      <form onSubmit={handleModalSubmit}>
        <input type="number" step='any' onChange={handleModalQty} value={modalQty} />
        <button type='submit'>Change Quantity</button>
      </form>
    </div>
  );
}
 
export default CoinModal;