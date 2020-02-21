import React from "react";
import { TodoForm } from "../../organisms/TodoForm";
import { TodoList } from "../../organisms/TodoList";

export const Root: React.FC = () => {
  return (
    <div>
      <TodoList />
      <TodoForm />
    </div>
  );
};
