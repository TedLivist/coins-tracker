import React from 'react';

const CoinModal = ({ open, onClose }) => {
  if (!open) return null
  return (
    <div>
      <button onClick={onClose}>Close Modal</button>
      <p>
        Hahaha
      </p>
    </div>
  );
}
 
export default CoinModal;