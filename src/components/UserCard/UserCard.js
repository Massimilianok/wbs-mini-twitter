import React from 'react';
import './UserCard.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const UserCard = ({ name, email }) => {
  return (
    <Card className="user-card text-center pt-2 mx-3 rounded shadow">
      <div className="user-card-image-box rounded-circle">
        <Image src="" roundedCircle />
      </div>
      <Card.Text className="m-0">{name}</Card.Text>
      <Card.Text className="m-0">{email}</Card.Text>
    </Card>
  );
};

export default UserCard;
