import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import NewEventForm from './NewEventForm';

function AddEventModal({ setAllEvents }) {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleShowModal = () => setShowModal(true); // Функция для отображения модального окна
  const handleCloseModal = () => setShowModal(false); // Функция для скрытия модального окна

  const handleNewEventAdded = () => {
    setShowModal(false);
  };
  return (
    <div style={{ marginTop: '20px', marginBottom: '80px', textAlign: 'center' }}>

      <Button
        variant="outline-warning"
        style={{
          boxShadow: '2px 2px 3px rgba(250, 125, 59, 0.3)',
          borderRadius: '9px',
          border: '4px solid',
          fontWeight: 'bold',
          color: isHovered ? '#FF4500' : '#E9967A',
        }}
        onClick={handleShowModal}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Add Event
      </Button>
      <Modal
        size="lg"
        centered
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewEventForm
            setAllEvents={setAllEvents}
            onNewEventAdded={handleNewEventAdded}
          />
          {' '}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddEventModal;
