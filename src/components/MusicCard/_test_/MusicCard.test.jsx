import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import MusicCard from "../MusicCard";
import { BrowserRouter } from "react-router-dom";

test("Should render the MusicCard", () => {
  const mockSong = [
    {
      id: "1",
      title: "test Song",
      artist: { name: "Test Artist", picture_medium: "url/to/image" },
      preview: "url/to/preview",
      rank: 1,
    },
  ];

  render(
    <BrowserRouter>
      <MusicCard songs={mockSong} />
    </BrowserRouter>
  );

  const songTitle = screen.getByText(/test Song/i);
  const songArtist = screen.getByText(/test Artist/i);
  expect(songTitle).toBeInTheDocument();
  expect(songArtist).toBeInTheDocument();
});
