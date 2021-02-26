import React, { useState, useEffect } from 'react';
import './UserCard.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const UserCard = ({ name }) => {
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
        <Card className="user-card text-center pt-2 mx-3 rounded shadow">
          <div className="user-card-image-box rounded-circle shadow">
            <Image src={userImages[0].picture.thumbnail} roundedCircle />
          </div>
          <Card.Text className="m-0">{name}</Card.Text>
        </Card>
      )}
    </>
  );
};

export default UserCard;
