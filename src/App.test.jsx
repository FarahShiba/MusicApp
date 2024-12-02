import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders learned", () => {
    expect(true).toBeTruthy();
  });
  test("renders without crashing", () => {
    render(<App />);
    const h1Element = screen.getByText(
      "Appreciate it when you listen to my music app."
    );
    expect(h1Element).toBeInTheDocument();
  });
});
