import React, { useState } from 'react';

const Form = (props) => {
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
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" onChange={inputHandler}/>
      
      <label htmlFor="email">Email: </label>
      <input type="text" name="email" id="email" onChange={inputHandler}/>

      <label htmlFor="role">Role: </label>
      <input type="text" name="role" id="role" onChange={inputHandler}/>

      <button type="submit">Submit</button>
    </form>
    )
}


export default Form;

