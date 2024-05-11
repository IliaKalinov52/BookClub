import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PopupModal from './PopupModal';

function CardComponent({
  event,
}) {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const borderStyle = {
    boxShadow: '2px 2px 3px rgba(250, 125, 59, 0.4)', // Добавляем тень
    borderRadius: '25px',
  };

  return (
    <>
      <Card style={{
        width: '18rem',
        border: '2px solid #FFFACD',
        ...borderStyle,
      }}
      >
        <Card.Img
          variant="top"
          style={{
            borderRadius: '25px', objectFit: 'cover',
          }}
          src={`/img/${event.img}`}
        />
        <Card.Body>
          <Card.Title>
            <Button
              variant="outline-warning"
              onClick={() => setPopupVisible(true)}
              style={{
                width: '100%',
                boxShadow: '2px 2px 2px rgba(250, 125, 59, 0.3)', // Добавляем тень
                borderRadius: '10px',
                border: '3px solid',
                fontWeight: 'bold',
                color: isHovered ? '#FF4500' : '#E9967A',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {event.title}
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>
      {isPopupVisible && (
        <PopupModal
          show={isPopupVisible}
          setPopupVisible={setPopupVisible}
          title={event.title}
          description={event.description}
        />
      )}
    </>
  );
}

export default CardComponent;
