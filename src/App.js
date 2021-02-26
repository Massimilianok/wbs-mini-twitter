import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
    fetchMessages();
    fetchUsers();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch(
        'https://twitter-clone-backend-api.herokuapp.com/messages'
      );
      if (res.ok) {
        const data = await res.json();
        setMessages(data.data);
      } else {
        throw new Error('Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        'https://twitter-clone-backend-api.herokuapp.com/users'
      );
      if (res.ok) {
        const data = await res.json();
        setUsers(data.data);
      } else {
        throw new Error('Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                  users.map((user) => <UserCard key={user._id} {...user} />)}
              </div>
              {messages &&
                messages.map((message) => (
                  <Message key={message._id} {...message} />
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
