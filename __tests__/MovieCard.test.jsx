import React from "react";
import { render, screen } from "@testing-library/react";
import MovieCard from "@/components/MovieCard"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("MovieCard", () => {
  const movie = {
    id: 1,
    title: "Movie Title",
    backdrop_path: "/movie-backdrop.jpg", // Simulate the backdrop path
    poster_path: "/movie-poster.jpg",
  };

  test("renders movie title", () => {
    render(<MovieCard movie={movie} />);

    // Check if the movie title is rendered correctly
    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });

  test("renders image with correct src and alt attributes", () => {
    render(<MovieCard movie={movie} />);

    // Check if the Image component has the correct src and alt attributes
    const image = screen.getByAltText(movie.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("image")); // Match just the relative part
    expect(image).toHaveAttribute("alt", movie.title);
  });
});
