import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Card from '../ui/Card';
import AddEventModal from '../ui/AddEventModal';

export default function EventPage({ events, user }) {
  const [allEvents, setAllEvents] = useState(events);

  return (

    <Container className="d-flex justify-content-center flex-column align-items-center">
      {' '}
      {user && user.isAdmin && <AddEventModal setAllEvents={setAllEvents} /> }

      <Row xs={1} md={2} lg={3} className="g-4">
        {allEvents?.map((card) => (
          <Col key={card.id}>
            <Card
              img={card.img}
              title={card.title}
              description={card.description}
              event={card}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
