import React from 'react';
import { useState } from 'react';
import Form from './components/Form'
import List from './components/List'

import './App.css';

function App() {
  const [memberList, setMemberList] = useState([])
  const [memberToEdit, setMemberToEdit] = useState({})
 
  const addNewMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMemberList([...memberList, newMember])
  }

  const editMember = (member) => {
    setMemberToEdit(member)
  }

  return (
    <div className="container">
        <Form 
          addNewMember={addNewMember}
          memberToEdit={memberToEdit}
        />
        <List 
          memberList={memberList}
          editMember={editMember}
        />
    </div>
  );
}

export default App;
