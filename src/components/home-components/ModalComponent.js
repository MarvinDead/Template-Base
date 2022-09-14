import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { GlobalDataContext } from "../../context/context";
import Form from "../contact-components/form"

function ModalComponent() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div className="d-flex flex-column">
            <div className="text-end">
              <p className="fs-5" style={{cursor:"pointer"}} onClick={handleClose}>X</p>
            </div>
            <div className="text-center pt-2 pb-2 bg-black">
              <img src={rpdata?.dbPrincipal?.logo} width={"50%"} alt="Not Found"/>
            </div>
          </div>
        </Modal.Header>
          <div>
            <h4 className="text-center">Request An Estimate Now </h4>
            <Form style={{width:"100%"}} />
          </div>
      </Modal>
    </div>
  );
}

export default ModalComponent;
