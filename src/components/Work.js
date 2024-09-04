import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {Card, Modal} from "react-bootstrap";
import { workData } from "../constants/workdata";
import PowerButton from "../subComponents/PowerButton";

const WorkPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const handleShowModal = (work) => {
    setSelectedWork(work);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWork(null);
  };

  return (
    <div className="work-container">
      <PowerButton />
      <div className="work-grid">
      <h1 className="text-white">Industry Level Projects</h1>
      <div className="cards-container">
        {workData.map((work, index) => {
          return (
            <Card className="work-card" key={index}>
              <Card.Header className="card-header">
                <Card.Title>{work.title}</Card.Title>
              </Card.Header>
              <Card.Body className="card-body">
                <Card.Text>{work.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Button onClick={() => handleShowModal(work)}>Open Description</Button>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedWork?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedWork?.briefDescription}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
}

export default WorkPage;
