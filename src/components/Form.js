import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const MemberForm = (props) => {
  const [member, setMember] = useState({
    name: "",
    email: '',
    role: '',
  })

  useEffect(() => {
    if(props.memberList) {
      setMember(props.memberToEdit)
    }
  }, [props.memberToEdit])
  
  const inputHandler = (e) => {
    setMember({...member, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (props.memberToEdit.id) {
      props.editMember(member)
    } else {
      props.addNewMember(member)
    }
    setMember({
      name: '',
      email: '',
      role: ''
    })
  }

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label htmlFor="name">Name: </Label>
        <Input placeholder="Johnny Appleseed" type="text" name="name" id="name" onChange={inputHandler} value={member.name}/>
      </FormGroup>
      
      <FormGroup>
        <Label htmlFor="email">Email: </Label>
        <Input placeholder="jApple@gmail.com" type="text" name="email" id="email" onChange={inputHandler} value={member.email}/>
      </FormGroup>

      <Label htmlFor="role">Role: </Label>
      <Input placeholder="Frontend Developer" type="text" name="role" id="role" onChange={inputHandler} value={member.role}/>

      <Button className="mt-4" type="submit">Submit</Button>
    </Form>
    )
}


export default MemberForm;

