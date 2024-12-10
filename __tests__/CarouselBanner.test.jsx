import React from "react";
import { render, screen } from "@testing-library/react";
import CarouselBanner from "../components/CarouselBanner";
import "@testing-library/jest-dom";

// Mock the embla-carousel-react module
jest.mock("embla-carousel-react", () => ({
  __esModule: true, // This is important for ES Module mock compatibility
  default: jest.fn(() => [null, null]), // Mocking the hook to return empty values (or whatever you need for the test)
}));

describe("CarouselBanner", () => {
  it("renders movie titles and descriptions (overview)", () => {
    // Mock data for testing
    const mockMovies = [
      { id: 1, title: "Movie 1", overview: "Overview 1" },
      { id: 2, title: "Movie 2", overview: "Overview 2" },
    ];

    // Render the CarouselBanner component
    render(<CarouselBanner movies={mockMovies} />);

    // Check if the movie titles and descriptions are rendered
    expect(screen.getByText("Movie 1")).toBeInTheDocument();
    expect(screen.getByText("Overview 1")).toBeInTheDocument();
    expect(screen.getByText("Movie 2")).toBeInTheDocument();
    expect(screen.getByText("Overview 2")).toBeInTheDocument();
  });
});
