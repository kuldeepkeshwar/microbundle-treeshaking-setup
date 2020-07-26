import React from "react";

import { styled } from "@filbert-js/core";

const Container = styled("div")`
  font-family: sans-serif;
  text-align: center;
`;
export default function App() {
  return (
    <Container>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Container>
  );
}
