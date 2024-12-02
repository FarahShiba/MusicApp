import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "../Header";

test("renders the header", async () => {
  render(<Header title="Music" />);
  const heading = await screen.getByText(/Music/i);
  expect(heading).toBeInTheDocument();
});
