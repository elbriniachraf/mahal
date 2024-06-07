import React, { useState } from 'react'
import { Modal, Row, Col } from 'react-bootstrap';
import Button from '../button/Button';

type Props = {
  setShow: (isShow: boolean) => void,
  isShow: boolean,
  deleteFunction?: any;
}

const ModalConfirm = ({ isShow, setShow, deleteFunction }: Props) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={isShow} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete these records? This process cannot be undone.</Modal.Body>
        <Modal.Footer>
          <Row >
            <Col>
              <Button variante="seconde" onClick={handleClose} content='Close' />
            </Col>
            <Col>
              <Button variante="primary" onClick={deleteFunction} content='Delete' />
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm