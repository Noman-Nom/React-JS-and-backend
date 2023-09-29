import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const ContactCard = ({contact}) => {
    return (
        <div>
            <div key={contact.id}
            className='flex items-center justify-between rounded-lg bg-yellow p-2'>
            <div className='flex gap-1'>
                <BiUserCircle className='text-4xl text-orange' />
                <div>
                    <h2 className='font-medium'>{contact.name}</h2>
                    <p className=' text-[18px]'>{contact.email}</p>
                </div>
            </div>
            <div className='flex text-3xl cursor-pointer'>
                <BiEdit className='cursor-pointer' />
                <MdDelete className='text-orange cursor-pointer' />


            </div>


        </div></div>
    )
}

export default ContactCard