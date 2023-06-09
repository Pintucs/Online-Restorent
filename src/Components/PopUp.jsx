import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Popup = ({ showModal,TextLable}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showModal, navigate]);

  return (
    <Modal show={showModal} backdrop="static" keyboard={false} >
      <Modal.Header closeButton style={{backgroundColor:"green",color:"white"}}>
        <Modal.Title>{TextLable}</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

export default Popup;
