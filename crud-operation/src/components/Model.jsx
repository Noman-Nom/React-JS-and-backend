import React from 'react'

const Model = ({onClose, isOpen,children}) => {
  return (
        <div>{isOpen && <div>Model</div>}</div>
  )
}

export default Model