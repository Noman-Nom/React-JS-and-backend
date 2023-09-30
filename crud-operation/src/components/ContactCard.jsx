import { collection, deleteDoc,doc } from 'firebase/firestore'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclose from '../Hooks/useDisclose'

const ContactCard = ({contact}) => {

    const {isOpen , onClose , onOpen} = useDisclose()
    const deleteContact = async (id)=>{
            try {
                const contactRef = doc(collection(db, 'contacts'), id); 
                await deleteDoc(contactRef);
                console.log("deleted", id)
            } catch (error) {
                console.log(error)
            }
    }

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
                <BiEdit onClick={onOpen} className='cursor-pointer' />
                <MdDelete onClick={()=>deleteContact(contact.id)} className='text-orange cursor-pointer' />


            </div>


        </div>
        <AddAndUpdateContact contact={contact}  isUpdate isOpen={isOpen} onClose={onClose}  />
        </div>
    )
}

export default ContactCard