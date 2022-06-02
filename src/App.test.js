import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Given my App", () => {
  describe("When rendering", () => {
    test("It should display the title", () => {
      render(<App />);
      const linkElement = screen.getByText(/lista de tareas/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("When clicking the checkbox of a task", () => {
    test("The counter should update", () => {
      render(<App />);

      const checkbox = screen.getAllByRole("checkbox")[0];
      const counter = screen.getByText(/completed tasks/i);

      expect(counter.innerHTML).toMatch(/0/);
      userEvent.click(checkbox);
      expect(counter.innerHTML).toMatch(/1/);
      userEvent.click(checkbox);
      expect(counter.innerHTML).toMatch(/0/);
    });
  });
});
