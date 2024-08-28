import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card, Modal, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TileView.css'; // Custom styles
import DetailModal from '../detailview/DetailView';

const TileView = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showActions, setShowActions] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleTileClick = (user) => {
    setSelectedUser(user);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedUser(null);
  };

  const handleEditClick = (user) => {
    // Logic to handle edit
    alert(`Editing ${user.name.first} ${user.name.last}`);
  };

  const handleFlagClick = (user) => {
    alert(`User ${user.name.first} ${user.name.last} has been flagged.`);
  };

  const handleDeleteClick = (email) => {
    setData(data.filter(user => user.email !== email));
  };

  const handleActionsClick = (user) => {
    setShowActions(user === showActions ? null : user);
  };

  return (
    <Container className="tile-view-container">
      <Row className="g-4">
        {data.map((user, index) => (
          <Col key={index} md={4} lg={3} className="mb-4">
            <Card className="user-tile" onClick={() => handleTileClick(user)}>
              <Card.Img variant="top" src={user.picture.large} />
              <Card.Body>
                <Card.Title>{user.name.first} {user.name.last}</Card.Title>
                <Card.Text>
                <span style={{fontSize:"14px", textDecoration:"underline"}}>{user.email}</span>
                </Card.Text>
                <Button
                  className="actions-button"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent tile click event
                    handleActionsClick(user);
                  }}
                >
                  Actions
                </Button>
                {showActions === user && (
                  <div className="actions-dropdown">
                    <Button
                      variant="outline-primary"
                      className="action-item"
                      onClick={() => handleEditClick(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outline-warning"
                      className="action-item"
                      onClick={() => handleFlagClick(user)}
                    >
                      Flag
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="action-item"
                      onClick={() => handleDeleteClick(user.email)}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Detailed View */}
      {selectedUser && (
        // <Modal show={showDetails} onHide={handleCloseDetails} size="lg">
        //   <Modal.Header closeButton>
        //     <Modal.Title>{selectedUser.name.first} {selectedUser.name.last}</Modal.Title>
        //   </Modal.Header>
        //   <Modal.Body>
        //     <img src={selectedUser.picture.large} alt="Profile" className="img-fluid mb-3" />
        //     <p><strong>Email:</strong> {selectedUser.email}</p>
        //     <p><strong>Phone:</strong> {selectedUser.phone}</p>
        //     <p><strong>Location:</strong> {selectedUser.location.city}, {selectedUser.location.country}</p>
        //     {/* Add more user details as needed */}
        //   </Modal.Body>
        //   <Modal.Footer>
        //     <Button variant="secondary" onClick={handleCloseDetails}>Close</Button>
        //   </Modal.Footer>
        // </Modal>
        <DetailModal
          show={showDetails}
          handleClose={handleCloseDetails}
          user={selectedUser}
          handleEdit={handleEditClick}
          handleFlag={handleFlagClick}
          handleDelete={handleDeleteClick}
        />
      )}
    </Container>
  );
};

export default TileView;
