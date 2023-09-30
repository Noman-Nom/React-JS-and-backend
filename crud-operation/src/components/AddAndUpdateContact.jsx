import React from 'react'
import Model from './Model'
import { Field, Form, Formik } from 'formik'

const AddAndUpdateContact = ({ isOpen, onClose }) => {
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
                        }}
                >
                    <Form>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="name">Name</label>
                        <Field  className="h-10 border bg-transparent" name = "name"/>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <Field className="h-10 border bg-transparent" type="email" name = "email"/>
                        </div>
                        <button className=' border bg-orange py-2 px-3 my-2 text-[15px'>Add Contact</button>
                    </Form>
                </Formik>

            </Model>
        </div>
    )
}

export default AddAndUpdateContact