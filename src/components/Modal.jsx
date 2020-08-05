import React from "react";
import { Button,  Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from 'react-router-dom';

class ModalExample extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader> Details</ModalHeader>
        <ModalBody>
          <div>
          <p>{this.props.date}</p>
            <p>{this.props.title}</p>
            <p>{this.props.description}</p>

          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" ><Link to="/db">See prices</Link></Button>
          <Button color="secondary" onClick={this.props.handleClose} style={{backgroundColor:"rgba(252,192,82,0.932"}}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalExample;
