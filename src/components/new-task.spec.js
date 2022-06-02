import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewTask } from "./new-task";

describe("Given the component NewTask", () => {
  const mockAddTask = jest.fn();
  const mockTaskToAdd = {
    title: "test",
    responsible: "test description",
  };

  describe("When calling it", () => {
    test("Then it should render", () => {
      // Arrange
      render(<NewTask />);

      const titleInput = screen.getByPlaceholderText("title");
      const respInput = screen.getByPlaceholderText("responsible");
      const createButton = screen.getByRole("button");

      expect(titleInput).toBeInTheDocument();
      expect(respInput).toBeInTheDocument();
      expect(createButton).toBeInTheDocument();
    });
  });

  describe("When calling it and creating a new task", () => {
    test("Then it should call the passed function", () => {
      // Arrange
      render(<NewTask addTask={mockAddTask} />);

      // Act
      const titleInput = screen.getByPlaceholderText("title");
      userEvent.click(titleInput);
      userEvent.keyboard(mockTaskToAdd.title);

      const respInput = screen.getByPlaceholderText("responsible");
      userEvent.click(respInput);
      userEvent.keyboard(mockTaskToAdd.responsible);

      const createButton = screen.getByRole("button");
      userEvent.click(createButton);

      // Assert
      expect(mockAddTask).toHaveBeenCalled();
    });
  });
});
