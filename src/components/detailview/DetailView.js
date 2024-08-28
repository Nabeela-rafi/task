import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './DetailView.css';

const DetailModal = ({ show, handleClose, user }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title style={{color:"#3f996f"}}>{user.name.first} {user.name.last}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <div className="userImage mb-4">
          <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="img-fluid" />
        </div>
        <div className="user-details">
            <table className="details-table">
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{user.gender}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{user.location.street.name}, {user.location.city}, {user.location.country}</td>
                </tr>
              </tbody>
            </table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailModal;
