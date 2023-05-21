import ReactDOM from 'react-dom';
import React from 'react';

const rootModal = document.getElementById("modal")

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div>
      {children}
    </div>,
    rootModal
  )
}

export { Modal }