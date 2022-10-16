import React, { useState } from "react";
import styled from "styled-components";



const Button = styled.button`
  background-color: mediumseagreen;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
`;

class LoginButton extends React.Component {
  render() {
    return (
      <Button onClick={this.props.onClick()}>
      Login
      </Button>
    )
}
}

export default LoginButton