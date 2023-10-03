import React from 'react'
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import { db } from '../../Config/Firebase';


const NewData = () => {

    // const handleAdd = async(e)=>{
    //     e.preventDefault()
    //     await setDoc(doc(db, "cities", "LA"), {
    //         name: "Los Angeles",
    //         state: "CA",
    //         country: "USA"
    //       });
    const handleAdd = async(e)=>{
        e.preventDefault()
       const response =  await addDoc(collection(db, "cities"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA",
            timeStamp: serverTimestamp()
          });
            console.log(response.id)
    }
// testing
  return (
    <div>
        <form onSubmit={handleAdd}>

            <button type='submit'>SEND</button>
        </form>

    </div>
  )
}

export default NewData