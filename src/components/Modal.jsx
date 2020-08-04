import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
          {/* <Button color="primary">See prices</Button>{" "} */}
          <Button color="secondary" onClick={this.props.handleClose} style={{backgroundColor:"rgba(252,192,82,0.932"}}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalExample;
