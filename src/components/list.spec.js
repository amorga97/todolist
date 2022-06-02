import { render, screen } from "@testing-library/react";
import { List } from "./list";

describe("Given the component List", () => {
  const mockTasks = [
    {
      id: 1,
      title: "test 1",
      responsible: "resp 1",
      isComplete: false,
    },
    {
      id: 2,
      title: "test 2",
      responsible: "resp 2",
      isComplete: false,
    },
  ];

  describe("When passing an array of task objects", () => {
    test("Then a number of tasks should be in the document", () => {
      render(<List tasks={mockTasks} />);

      expect(screen.getAllByRole("listitem")).toHaveLength(mockTasks.length);

      mockTasks.forEach((task) => {
        expect(screen.getByText(task.title)).toBeInTheDocument();
      });
    });
  });
});
