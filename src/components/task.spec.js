import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Task } from "./task";

describe("Given the component Task", () => {
  const mockTask = {
    id: 1,
    title: "test 1",
    responsible: "resp 1",
    isComplete: false,
  };

  const mockDeleteFunction = jest.fn();
  const mockToggleComplete = jest.fn();

  describe("When calling it with a task", () => {
    test("Then it should be rendered", () => {
      // Arrange
      render(<Task task={mockTask} />);

      // Assert
      expect(screen.getByText(mockTask.title)).toBeInTheDocument();
    });
  });

  describe("When calling it with a task and then pressing delete", () => {
    test("Then the passed function deleteTask should be called", () => {
      // Arrange
      render(<Task task={mockTask} deleteTask={mockDeleteFunction} />);

      // Act
      const deleteButton = screen.getByRole("button");
      userEvent.click(deleteButton);

      // Assert
      expect(mockDeleteFunction).toHaveBeenCalledWith(mockTask.id);
    });
  });

  describe("When calling it with a task and then pressing the completed checkbox", () => {
    test("Then the passed function toggleComplete should be called", () => {
      // Arrange
      render(<Task task={mockTask} toggleComplete={mockToggleComplete} />);

      // Act
      const toggleCompleteButton = screen.getByRole("checkbox");
      userEvent.click(toggleCompleteButton);

      // Assert
      expect(mockToggleComplete).toHaveBeenCalledWith(mockTask.id);
    });
  });
});
