import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MoviesCarousel from "../components/MoviesCarousel";

describe("MoviesCarousel", () => {
  const mockMovies = [
    {
      id: 1,
      title: "Movie 1",
      release_date: "2022-01-01",
      overview: "Overview 1",
    },
    {
      id: 2,
      title: "Movie 2",
      release_date: "2023-01-01",
      overview: "Overview 2",
    },
  ];

  it("renders the title and movie names correctly", () => {
    render(
      <MoviesCarousel
        title="Test Title"
        movies={mockMovies}
        isVertical={false}
      />
    );

    // Check that the title is rendered
    expect(screen.getByText("Test Title")).toBeInTheDocument();

    // Check that the movie names are rendered
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
  });
});
