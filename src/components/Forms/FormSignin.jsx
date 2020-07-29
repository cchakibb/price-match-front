import React, { Component } from "react";

import UserContext from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { Button, FormGroup, Form, Label, Input,Col } from 'reactstrap';
// import "../styles/signin.css";
class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;

    // You can test more if you have to handle different sorts of inputs.
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    return (
      <div className="form">
          <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
      {/* <FormGroup check row>
      <Col sm={{ size: 10, offset: 2 }}>
          <Button className="btn-submit">Submit</Button>
        </Col>
      </FormGroup> */}
      <Col sm={{ size: 10, offset: 2 }}>
          <Button className="btn-submit" >Submit</Button>
        </Col>
    </Form>
  
      {/* <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button>Submit</button>
      </form> */}

      </div>
    );
  }
}

export default withRouter(FormSignin);
