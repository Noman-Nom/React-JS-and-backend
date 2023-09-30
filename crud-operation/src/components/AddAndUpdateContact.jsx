import React from 'react'
import Model from './Model'
import { Field, Form, Formik } from 'formik'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../config/firebase'

const AddAndUpdateContact = ({ isOpen, onClose }) => {

    const addContact = async (contact)=>{

        try {
            const contactRef = collection(db,"contacts")
            await addDoc(contactRef,contact)
            
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Model
                isOpen={isOpen}
                onClose={onClose}>

                <Formik 
                        initialValues={{
                            name: "",
                            email: "",
                        }}
                        onSubmit={(values)=>{
                            console.log(values)
                            addContact(values)
                        }}
                >
                    <Form>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <Field  className="h-10 border bg-transparent" name = "name"/>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <Field className="h-10 border bg-transparent"  name = "email"/>
                        </div>
                        <button className=' border bg-orange py-2 px-3 my-2 text-[15px'>Add Contact</button>
                    </Form>
                </Formik>

            </Model>
        </div>
    )
}

export default AddAndUpdateContact