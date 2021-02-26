import React, { useState, useEffect } from 'react';
import { messagesData } from './data';
import Container from 'react-bootstrap/Container';
import Message from './components/Message/Message';

const App = () => {
  const [messages, setMessages] = useState();

  useEffect(() => {
    setMessages(messagesData);
  }, []);

  return (
    <Container fluid>
      <div>
        header
        <div>Searchbar</div>
      </div>
      <div>user</div>
      <main>
        {messages && messages.map((message) => <Message {...message} />)}
      </main>
      <footer>footer</footer>
    </Container>
  );
};

export default App;
