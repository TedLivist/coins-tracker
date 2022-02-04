import React, { useState } from 'react';

const CoinModal = ({ open, coinId, quantity, onClose }) => {
  const [modalQty, setModalQty] = useState(quantity)


  const handleModalQty = (e) => {
    setModalQty(e.target.value)
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()

    console.log(modalQty)
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