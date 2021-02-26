import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const MessagePage = () => {
  const [message, setMessage] = useState();
  const [user, setUser] = useState();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const userId = location.search.split('=')[1];
    fetchMessage(params.id);
    fetchUser(userId);
  }, []);

  const fetchMessage = async (id) => {
    try {
      const res = await fetch(
        `https://twitter-clone-backend-api.herokuapp.com/messages/${id}`
      );
      if (res.ok) {
        const data = await res.json();
        setMessage(data.data);
      } else {
        throw new Error('Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUser = async (id) => {
    try {
      const res = await fetch(
        `https://twitter-clone-backend-api.herokuapp.com/users/${id}`
      );
      if (res.ok) {
        const data = await res.json();
        setUser(data.data);
      } else {
        throw new Error('Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {message && (
        <div className="messagePage">
          <Card style={{ width: '18rem' }}>
            <Card.Img className="w-50" variant="top" src="" />
            <Card.Body>
              <Card.Title>{message[0].text}</Card.Title>
              <Card.Text>{user && user[0].name}</Card.Text>
              <Card.Text>{user && user[0].email}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default MessagePage;
