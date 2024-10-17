import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Heading as="h1">The Wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and out</Heading>
            <Button onClick={() => alert("Check in")}>Check in</Button>
            <Button onClick={() => alert("Check Out")}>Check Out</Button>
          </div>
        </Row>
        <div>
          <Heading as="h3">Forms</Heading>
          <Input type="number" placeholder="Number of guests" />
          <Input type="number" placeholder="Number of guests" />
        </div>
      </StyledApp>
    </>
  );
};

export default App;
