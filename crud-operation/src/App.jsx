
import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

 
import { db } from './config/firebase'
import ContactCard from './components/ContactCard'
import Model from './components/Model'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useDisclose from './Hooks/useDisclose'

function App() {

  const [contacts, setContacts] = useState([])

const {isOpen , onClose , onOpen} = useDisclose()


  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts")
        

        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
  
  
          })
          // console.log(contactLists)
          setContacts(contactLists)
          return contactLists
  

        })
        
      } catch (error) {
        console.log(error)
      }
    }

    getContacts()
  }, [])


  return (
    <>
    
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
        <AiFillPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer ' />
      </div>

      <div className='mt-4 flex flex-col gap-2'>
        {
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))
        }</div>
    </div>

    <AddAndUpdateContact  onClose={onClose} isOpen={isOpen} />
    <ToastContainer position="bottom-center"/>

    
    </>
  )
}

export default App
