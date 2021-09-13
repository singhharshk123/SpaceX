import React, { useState} from "react";
import {Button , Modal } from 'react-bootstrap';
import CardFile from "./CardFile";


function Window({rocketId}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
      <>
      <Button variant="primary" onClick={handleShow}> View </Button>
     
      <Modal  show={show} onHide={handleClose}>
     
        <CardFile rocketId={rocketId} />
        
      </Modal>
      
    </>
    </div>
  );
}
export default Window;