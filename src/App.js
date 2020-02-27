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
      role: member.role,
    }
    setMemberList([...memberList, newMember])
  }

  const setEditMember = (member) => {
    setMemberToEdit(member)
  }

  const editMember = (editedMember) => {
    const updatedMemberList = 
      memberList.map((member) =>
      member.id === editedMember.id ?
      editedMember :
      member
    )
    setMemberList(updatedMemberList)
    setMemberToEdit({})
  }

  return (
    <div className="container">
        <Form 
          addNewMember={addNewMember}
          memberToEdit={memberToEdit}
          editMember={editMember}
          memberList={memberList}
        />
        <List 
          memberList={memberList}
          setEditMember={setEditMember}
        />
    </div>
  );
}

export default App;
