import React, { Component } from "react";
import { Input, Container, Header } from "semantic-ui-react";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  onChange = e => {};

  render() {
    const { username, email, password } = this.state;

    return (
      <Container text>
        <Header as="h2">Register</Header>
        <Input
          onChange={this.onChange}
          value={username}
          placeholder="Username"
          fluid
        />
        <Input
          onChange={this.onChange}
          value={email}
          placeholder="Email"
          fluid
        />
        <Input
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
