import React from "react";
import { logRoles, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};
test("should render text passed into props", async () => {
  render(<MockHome />);
  const fact = await screen.findByText(
    "Appreciate it when you listen to my music app."
  );
  screen.debug;
  logRoles(fact);
  expect(fact).toBeInTheDocument();
});
