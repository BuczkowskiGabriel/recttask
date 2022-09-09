import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'


export default function Formular() {
   return (
    <Form>
    <Form.Group className="mb-3" controlId="formFirstName">
      <Form.Label>FirstName</Form.Label>
      <Form.Control type="text" placeholder="Enter your name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formSurname">
      <Form.Label>Surname</Form.Label>
      <Form.Control type="text" placeholder="Enter your surname" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formcity">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="Enter your city" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formPostalCode">
      <Form.Label>PostalCode</Form.Label>
      <Form.Control type="text" placeholder="Enter your PostalCode" pattern="[0-9]*"/>
    </Form.Group>
    <Button variant="primary" type="submit">
      I ORDER AND PAY
    </Button>
  </Form>
   );
}