import React from "react";
import { Columns } from "layout-ui";

export default function App() {
  return (
    <Columns gap="2rem" align="center">
      <Columns.Column>Item 1</Columns.Column>
      <Columns.Column>Item 2</Columns.Column>
    </Columns>
  );
}
