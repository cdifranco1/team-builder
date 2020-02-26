import React from 'react';
import { useState } from 'react';
import Form from './components/Form'
import List from './components/List'

import './App.css';

function App() {
  const [memberList, setMemberList] = useState([])
 
  const addNewMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setMemberList([...memberList, newMember])
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form 
          addNewMember={addNewMember}
        />
        <List 
          memberList={memberList}
        />
      </header>
    </div>
  );
}

export default App;
