import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import { Button, FormGroup, Form, Label, Input,Col } from 'reactstrap';

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const value =
      event.target.type === "file"
        ? event.target.files[0]
        : event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
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

  <Col sm={{ size: 10, offset: 2 }}>
      <Button className="btn-submit" >Submit</Button>
    </Col>
</Form>

  

  </div>
    );
  }
}

export default withRouter(FormSignup);
