import React from "react";
import { Columns, Stack } from "layout-ui";

export default function App() {
  return (
    <>
      <Stack gap="2rem" align="center">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
      <Columns gap="2rem" align="center">
        <Columns.Column>Item 1</Columns.Column>
        <Columns.Column>Item 2</Columns.Column>
      </Columns>
    </>
  );
}
