import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'


export default function Formular() {
   const [form, setForm] = useState({});
   const [errors, setErrors] = useState({});
   const setField = (field, value) => {
     setForm({
       ...form, 
       [field]: value
     })
   }
   const findFormErrors = () => {
    const { name, surname, city, PostalCode } = form 
    const newErrors = {}
    // name errors 
     if (!name || name === '') newErrors.name = 'cannot be blank!'
     else if (name.length > 30) newErrors.name = 'name is too long!'
    // surname errors 
     if (!surname || surname === '') newErrors.surname = 'cannot be blank!'
     else if (surname.length > 30) newErrors.surname = 'surname is too long!'
    // city errors 
     if (!city || city === '') newErrors.city = 'cannot be blank'
    // PostalCode errors 
     if (!PostalCode || PostalCode == '') newErrors.PostalCode = 'cannot be blank'

     return findFormErrors
    }
    const handleSubmit = e => {
      e.preventDefault() 
      const newErrors = findFormErrors() 
      if(Object.keys(newErrors).length > 0)
      {
        setErrors(newErrors)
      } else {
        alert('Thank you for your feedback!')
      } 
    }
   return (
    <Form>
    <Form.Group className="mb-3" controlId="formFirstName">
      <Form.Label>FirstName</Form.Label>
      <Form.Control type="text" onChange={ e => setField('name', e.target.value)} isInvalid={!!errors.name} placeholder="Enter your name" />
      <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formSurname">
      <Form.Label>Surname</Form.Label>
      <Form.Control type="text" onChange={ e => setField('surname', e.target.value)} isInvalid={!!errors.surname} placeholder="Enter your surname" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formcity">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" onChange={ e => setField('city', e.target.value)} isInvalid={!!errors.city} placeholder="Enter your city" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formPostalCode">
      <Form.Label>PostalCode</Form.Label>
      <Form.Control type="text" onChange={ e => setField('PostalCode', e.target.value)} isInvalid={!!errors.PostalCode} placeholder="Enter your PostalCode" pattern="[0-9]*"/>
    </Form.Group>
    <Button variant="primary" type="submit">
      I ORDER AND PAY
    </Button>
  </Form>
   );
}