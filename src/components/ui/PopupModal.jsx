import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function PopupModal({
  show, setPopupVisible, title, description,
}) {
  return (
    <Modal
      show={show}
      onHide={() => setPopupVisible(false)}
      backdrop="static"
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setPopupVisible(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupModal;
