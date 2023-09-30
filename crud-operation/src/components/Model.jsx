import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'


const Model = ({ onClose, isOpen, children }) => {
    return (
        <>
            {
                isOpen && (

                    <>
                    <div className='bg-white m-auto min-h-[200px] max-w-[60%] p-4 relative z-50 transition-all -top-20 ' >
                        <div className='flex justify-end'>
                            <AiOutlineCloseCircle onClick={onClose}  className='text-3xl cursor-pointer '/>
                        </div>
                    </div>
                    <div  onClick={onClose} className='absolute top-0 h-screen w-screen backdrop-blur z-40'/>
                    </>
                )

            }


        </>
    )
}

export default Model