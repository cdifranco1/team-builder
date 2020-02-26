import React, { useState } from 'react';

const List = ({memberList}) => {
  return (
    memberList.map(member => 
      <div key={member.id}>
        <span>{member.name}</span>
        <span>{member.email}</span>
        <span>{member.role}</span>
      </div>
    )
  )
}
  
export default List;

