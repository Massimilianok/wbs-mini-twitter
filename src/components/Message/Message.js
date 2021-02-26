import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Message.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

const Message = ({ text, date, _id, user_id }) => {
  const [userImages, setUserImages] = useState();

  useEffect(() => {
    fetchUserImage();
  }, []);

  const fetchUserImage = async () => {
    try {
      const res = await fetch('https://randomuser.me/api');
      if (res.ok) {
        const data = await res.json();
        setUserImages(data.results);
      } else {
        throw new Error('Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {userImages && (
        <Card className="shadow rounded mb-4">
          <Card.Header className="d-flex justify-content-between align-item-center message-header">
            <div className="message-image-box rounded-circle shadow">
              <Image src={userImages[0].picture.thumbnail} roundedCircle />
            </div>
            <Badge pill variant="dark" className="align-self-center">
              {new Date(date).toLocaleDateString('en-GB')}
            </Badge>
            <Badge pill variant="dark" className="align-self-center">
              {new Date(date).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Badge>
          </Card.Header>
          <Card.Body className="py-5">
            <Card.Text>{text}</Card.Text>
          </Card.Body>
          <Card.Footer className="message-footer text-right py-1">
            <Link to={`/messages/${_id}?user=${user_id}`}>Show details</Link>
          </Card.Footer>
        </Card>
      )}
    </>
  );
};

export default Message;
