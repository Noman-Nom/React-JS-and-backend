import React from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../Config/Firebase';


const NewData = () => {

    const handleAdd = async(e)=>{
        e.preventDefault()
        await setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA"
          });

    }

  return (
    <div>
        <form onSubmit={handleAdd}>

            <button type='submit'>SEND</button>
        </form>

    </div>
  )
}

export default NewData