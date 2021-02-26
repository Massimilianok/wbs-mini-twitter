import React, { useState, useEffect } from 'react';
import { messagesData, usersData } from './data';
import './App.css';
import Container from 'react-bootstrap/Container';
import Message from './components/Message/Message';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserCard from './components/UserCard/UserCard';

const App = () => {
  const [messages, setMessages] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    setMessages(messagesData);
    setUsers(usersData);
  }, []);

  return (
    <Container fluid>
      <div>
        header
        <div>Searchbar</div>
      </div>
      <Row as={'main'}>
        <Col xs={12}>
          <div className="users-cards py-5">
            {users && users.map((user) => <UserCard key={user.id} {...user} />)}
          </div>
        </Col>
        <Col xs={12}>
          {messages &&
            messages.map((message) => (
              <Message key={message.id} {...message} />
            ))}
        </Col>
      </Row>
      <footer>footer</footer>
    </Container>
  );
};

export default App;
