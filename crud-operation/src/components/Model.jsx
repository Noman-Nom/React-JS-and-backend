import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'


const Model = ({ onClose, isOpen, children }) => {
    return createPortal(
        <>
            {
                isOpen && (

                    <>
                    <div className='bg-white m-auto min-h-[200px] max-w-[60%] p-4 relative z-50 transition-all -top-20 ' >
                   
                        <div className='flex justify-end'>
                            <AiOutlineCloseCircle onClick={onClose}  className='self-end text-3xl cursor-pointer '/>
                         
                        </div>
                        {children}
                    </div>
                    <div  onClick={onClose} className='absolute top-0 h-screen w-screen backdrop-blur z-40'/>
                    </>

)
            }


        </>
        ,document.getElementById("modal-root")
    )
}

export default Model