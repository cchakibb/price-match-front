import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";

class FormContact extends Component {
  // constructor(props) {
  // super(props);
  state = {
    name: "",
    email: "",
    message: "",
  };
  // }

  handleSubmit(e) {
    e.preventDefault();
    apiHandler.Send(this.state).then((response) => {
      console.log(response);
      //   if (response.data.status === 'success'){
      //     alert("Message Sent.");
      //     this.resetForm()
      //   }else if(response.data.status === 'fail'){
      //     alert("Message failed to send.")
      //   }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="contact-div">
        <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="txtb">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="txtb">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" id="email" name="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="txtb">
            <label htmlFor="message">Message</label>
            <textarea rows="5" id="message" name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btni">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormContact;
