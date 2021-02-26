import React, { useState, useEffect } from 'react';
import './UserCardList.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const UserCard = ({ name, email }) => {
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
        <Card className="user-card-list d-flex flex-row justify-content-start align-items-center p-2 mx-3 mb-4 rounded shadow">
          <div className="user-card-list-image-box rounded-circle shadow">
            <Image src={userImages[0].picture.thumbnail} roundedCircle />
          </div>
          <div>
            <Card.Text className="m-0">{name}</Card.Text>
            <Card.Text className="m-0">{email}</Card.Text>
          </div>
        </Card>
      )}
    </>
  );
};

export default UserCard;
