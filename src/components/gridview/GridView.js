import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GridView.css'; // Custom styles

const GridView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container className="grid-view-container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {data.map((user, index) => (
          <Col key={index}>
            <Card className="user-card">
              <Card.Img variant="top" src={user.picture.large} />
              <Card.Body>
                <Card.Title>{user.name.first} {user.name.last}</Card.Title>
                <Card.Text>
                  {/* <strong>Gender:</strong> {user.gender}<br /> */}
                  <span style={{fontSize:"14px", textDecoration:"underline"}}>{user.email}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridView;
