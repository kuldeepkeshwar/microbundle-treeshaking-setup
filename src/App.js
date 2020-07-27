import React from "react";

import { Columns } from "layout-ui";

import { styled } from "@filbert-js/core";


const Container = styled("div")`
  > * + * {
    margin-top: 4rem;
  }
`;
export default function App() {
  return (
    <Container>
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
