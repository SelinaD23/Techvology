import React, { useState } from "react";
import styled from "styled-components";


const LoginButton = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div>
      <StyledButton onClick={handleClick}>
        {loggedIn ? "Logout" : "Login"}
      </StyledButton>
    </div>
  );
}

export default LoginButton;

const StyledButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;