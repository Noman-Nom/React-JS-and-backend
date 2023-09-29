
import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { collection, getDocs } from 'firebase/firestore'
import { BiUserCircle } from 'react-icons/bi'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
 
import { db } from './config/firebase'

function App() {

  const [contacts, setContacts] = useState([])


  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts")
        const contactsSnapshot = await getDocs(contactsRef)
        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }


        })
        // console.log(contactLists)
        setContacts(contactLists)

      } catch (error) {
        console.log(error)
      }
    }

    getContacts()
  }, [])


  return (
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />


      <div className="flex gap-2">
        <div className="flex flex-grow items-center relative  ">
          <FiSearch className='ml-1 absolute text-3xl text-white p-1' />
          <input type="text"
            className='h-10 flex-grow rounded-md border border-white
      bg-transparent outline-none pl-10 text-white text-[19px]'
            name="" id="" />
        </div>
        <AiFillPlusCircle className='text-5xl text-white cursor-pointer ' />
      </div>

      <div className='mt-4'>
        {
          contacts.map((contact) => (
            <div key={contact.id}
              className='flex items-center justify-around rounded-lg bg-yellow p-2'>
              <div className='flex gap-1'>
                <BiUserCircle className='text-4xl text-orange' />
                <div>
                  <h2 className='font-medium'>{contact.name}</h2>
                  <p className=' text-[18px]'>{contact.email}</p>
                </div>
              </div>
              <div className='flex text-3xl cursor-pointer'>
                <BiEdit className='cursor-pointer'/>
                <MdDelete className='text-orange cursor-pointer'/>
              

              </div>


            </div>
          ))
        }</div>
    </div>
  )
}

export default App
