import React from 'react'
import Model from './Model'

const AddAndUpdateContact = ({isOpen,onClose}) => {
  return (
    <div>
            <Model
        isOpen={isOpen}
        onClose={onClose}
    >Hi</Model>
    </div>
  )
}

export default AddAndUpdateContact