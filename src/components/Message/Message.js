import React from 'react';
import './Message.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

const Message = ({ text, date, user }) => {
  return (
    <Card className="shadow rounded mb-4">
      <Card.Header className="d-flex justify-content-between align-item-center message-header">
        <div className="message-image-box rounded-circle">
          <Image src="" roundedCircle />
        </div>
        <Badge pill variant="dark" className="align-self-center">
          {date}
        </Badge>
      </Card.Header>
      <Card.Body className="py-5">
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="message-footer text-right py-1">
        Show details
      </Card.Footer>
    </Card>
  );
};

export default Message;
