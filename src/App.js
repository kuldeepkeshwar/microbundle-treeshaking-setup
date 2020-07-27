import React from "react";
import { Columns, Stack } from "layout-ui";
import { styled } from "@filbert-js/core";

const Container = styled("div")`
  > * + * {
    margin-top: 4rem;
  }
`;
export default function App() {
  return (
    <Container>
      <Stack gap="2rem" align="center">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
      <Columns gap="2rem" align="center">
        <Columns.Column>Item 1</Columns.Column>
        <Columns.Column>Item 2</Columns.Column>
      </Columns>
      <div>
        <a href="/bundle-report.html">Check bundle report</a>
      </div>
    </Container>
  );
}
