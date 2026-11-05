import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./Pages/Larp", () => () => null);

test("renders the homepage", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "Joey Kokinda" })).toBeInTheDocument();
  expect(screen.getByAltText("Boiler Blockchain").closest("a")).toHaveAttribute("href", "/boilerblockchain");
  expect(screen.getByAltText("10x").closest("a")).toHaveAttribute("href", "https://10x.so");
});
