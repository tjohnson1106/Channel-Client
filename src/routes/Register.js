import React, { Component } from "react";
import { Input, Container, Header } from "semantic-ui-react";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onChange = e => {
    const { name, value } = e.target;
    //name = email
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <Container text>
        <Header as="h2">Register</Header>
        <Input
          name="username"
          onChange={this.onChange}
          value={username}
          placeholder="Username"
          fluid
        />
        <Input
          name="email"
          onChange={this.onChange}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
          name="password"
          onChange={this.onChange}
          value={password}
          placeholder="password"
          fluid
        />
      </Container>
    );
  }
}

export default Register;
