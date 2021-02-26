import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { messagesData, usersData } from './data';
import './App.css';
import Container from 'react-bootstrap/Container';
import Message from './components/Message/Message';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserCard from './components/UserCard/UserCard';
import NavMobile from './components/NavMobile/NavMobile';
import Header from './components/Header/Header';

const App = () => {
  const [messages, setMessages] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    setMessages(messagesData);
    setUsers(usersData);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row as={'main'} className="main">
        <Switch>
          <Route path="/" exact>
            <Col xs={12}>
              <div className="users-cards py-5">
                {users &&
                  users.map((user) => <UserCard key={user.id} {...user} />)}
              </div>
              {messages &&
                messages.map((message) => (
                  <Message key={message.id} {...message} />
                ))}
            </Col>
          </Route>
          <Route path="/users">Users</Route>
          <Route path="/users/:id">Single user</Route>
          <Route path="/message/:id">Single message</Route>
          <Redirect to="/" />
        </Switch>
      </Row>
      <footer>footer</footer>
      <NavMobile />
    </Container>
  );
};

export default App;
