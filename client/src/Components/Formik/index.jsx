import React from 'react'
import "./index.scss"
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const FormAdd = ({getData}) => {
  async function addProd(values) {
    const res=await axios.post("http://localhost:3000/",values)
    getData()
  }
  return (
    <div className='forma'>
       <Formik
      initialValues={{ title: '', image: '', price: '' }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Required'),
        image: Yup.string()
          .required('Required'),
        price: Yup.number().positive('price must be positive').required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        addProd(values)
        resetForm()
      }}
    >
      <Form>
        <label htmlFor="title">Title:</label>
        <Field name="title" type="text" />
        <div className="red"><ErrorMessage name="title" /></div>

        <label htmlFor="image">Image:</label>
        <Field name="image" type="text" />
        <div className="red"><ErrorMessage name="image" /></div>

        <label htmlFor="price">Price:</label>
        <Field name="price" type="price" />
        <div className="red"><ErrorMessage name="price" /></div>

        <button className='btn' type="submit">Add</button>
      </Form>
    </Formik>
    </div>
  )
}

export default FormAdd



