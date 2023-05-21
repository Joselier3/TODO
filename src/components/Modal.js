import ReactDOM from 'react-dom';
import React from 'react';
import '../assets/ModalBackground.css'

const rootModal = document.getElementById("modal")

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className='ModalBackground'>
      {children}
    </div>,
    rootModal
  )
}

export { Modal }