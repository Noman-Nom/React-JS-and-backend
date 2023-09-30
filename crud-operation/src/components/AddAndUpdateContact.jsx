import React from 'react'
import Model from './Model'
import { Field, Form, Formik } from 'formik'
import {addDoc, collection, doc, updateDoc} from 'firebase/firestore'
import {db} from '../config/firebase'

const AddAndUpdateContact = ({ isOpen, onClose , isUpdate, contact }) => {


    const addContact = async (contact)=>{

        try {
            const contactRef = collection(db,"contacts")
            await addDoc(contactRef,contact)
            onClose()
            
        } catch (error) {
            console.log(error)
        }
    }

    const updateContact = async (contact,id)=>{

        try {
            const contactRef = doc(db,"contacts",id)
            await updateDoc(contactRef,contact)
            onClose()
            
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
                        initialValues={
                          isUpdate? {
                            name: contact.name,
                            email: contact.email
                          }:
                            {

                            name: "",
                            email: "",
                        }}
                        onSubmit={(values)=>{
                            console.log(values)
                            isUpdate? updateContact (values,contact.id):
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
                        <button  className=' border bg-orange py-2 px-3 my-2 text-[15px'>{isUpdate ? "Update": "Add"} Contact</button>
                    </Form>
                </Formik>

            </Model>
        </div>
    )
}

export default AddAndUpdateContact