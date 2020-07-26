import React from "react";
import { Stack } from "layout-ui";
import { styled } from "@filbert-js/core";

const Container = styled("div")`
  font-family: sans-serif;
  text-align: center;
`;
export default function App() {
  return (
    <Container>
      <Stack gap="2rem" align="center">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Stack>
    </Container>
  );
}
