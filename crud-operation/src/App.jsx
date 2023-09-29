
import './App.css'
import Navbar from './components/Navbar'
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'

function App() {
 

  return (
   <div className='mx-auto max-w-[370px] px-4'>
    <Navbar/>

 
    <div className="flex gap-2">
    <div className="flex flex-grow items-center relative  ">
      <FiSearch className='ml-1 absolute text-3xl text-white p-1'/>
      <input type="text"
      className='h-10 flex-grow rounded-md border border-white
      bg-transparent outline-none pl-10 text-white text-[19px]'
      name="" id="" />
    </div>
    <AiFillPlusCircle className='text-5xl text-white cursor-pointer '/>
    </div>
   </div>
  )
}

export default App
