import { expect, test } from "vitest";
import { queryAllByText, render, screen } from "@testing-library/react";

import MusicPlayers from "../MusicPlayers";

test("renders the header", () => {
  render(<MusicPlayers title="Music" />);
  const musical = screen.queryAllByText(/💿💿Welcome to Music Album🎹🎹/i);
  expect(musical.length).toBe(1);
});
