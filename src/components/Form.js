import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const MemberForm = (props) => {
  const [member, setMember] = useState({
    name: "",
    email: '',
    role: ''
  })
  
  const inputHandler = (e) => {
    setMember({...member, [e.target.name]: e.target.value})
    console.log(member)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.addNewMember(member)
  }

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label htmlFor="name">Name: </Label>
        <Input type="text" name="name" id="name" onChange={inputHandler}/>
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="email">Email: </Label>
        <Input type="text" name="email" id="email" onChange={inputHandler}/>
      </FormGroup>

      <Label htmlFor="role">Role: </Label>
      <Input type="text" name="role" id="role" onChange={inputHandler}/>

      <Button className="mt-4" type="submit">Submit</Button>
    </Form>
    )
}


export default MemberForm;

