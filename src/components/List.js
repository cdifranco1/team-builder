import React from 'react';
import { ListGroup, ListGroupItem, Container, Button } from 'reactstrap';

const List = ({memberList, setEditMember}) => {
  return (
    <Container>
      <h1 className="m-3">Team Members:</h1>
      {memberList.map(member => 
        <ListGroup className="m-5" key={member.id}>
          <ListGroupItem>
            <strong>Name: </strong> {member.name}<br/>
            <strong>Email: </strong> {member.email}<br/>
            <strong>Role: </strong> {member.role}<br/>
            <Button 
              className="w-10 m-2"
              onClick={() => setEditMember(member)}  
            >Edit</Button>
          </ListGroupItem>
        </ListGroup>
      )}
    </Container>
  )
}
  
export default List;

