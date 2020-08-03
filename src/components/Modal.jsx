import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} style={{ display: "block" }}>
        <ModalHeader> Jello</ModalHeader>
        <ModalBody>
          <div>
            <p>{this.props.event.title}</p>
            <p>{this.props.event.description}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">See prices</Button>{" "}
          <Button color="secondary" onClick={this.props.handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalExample;
