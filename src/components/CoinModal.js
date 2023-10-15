import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faRotate } from '@fortawesome/free-solid-svg-icons';
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
      <div className='fixed top-0 left-0 right-0 bottom-0 z-40' onClick={onClose} />
      <div className="fixed top-2/4 left-2/4 bg-slate-400 translated p-2 z-40 rounded-2xl">
        <div className='text-right'>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div>Currency: {coinId}</div>
        <div className='mb-2'>Quantity: {quantity}</div>
        <form onSubmit={handleModalSubmit} className='mb-2'>
          <input type="number" step='any' onChange={handleModalQty} value={modalQty} className='p-1 rounded-lg' />
          <button type='submit' className='btn-sm btn-primary mt-2 px-3'>
            <FontAwesomeIcon icon={faRotate} />
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default CoinModal;