import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../redux/coins/coins';

const CoinModal = ({ open, coinId, quantity, onClose }) => {
  const dispatch = useDispatch()
  const [modalQty, setModalQty] = useState(quantity)


  const handleModalQty = (e) => {
    setModalQty(e.target.value)
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()

    dispatch(changeQuantity({id: coinId, qty: parseFloat(modalQty)}))
  }

  if (!open) return null
  return (
    <div>
      <button onClick={onClose}>Close Modal</button>
      <div>{coinId}</div>
      <div>{quantity}</div>
      <form onSubmit={handleModalSubmit}>
        <input type="number" onChange={handleModalQty} value={modalQty} />
        <button type='submit'>Change Quantity</button>
      </form>
    </div>
  );
}
 
export default CoinModal;