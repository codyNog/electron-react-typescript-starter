import React, { useEffect } from "react";
import { Container, List } from "@material-ui/core";
import { TodoItem } from "../../molecules/TodoItem";
import { TodoStore } from "../../../store/global/todo";

export const TodoList: React.FC = () => {
  const { todos, readTodos, deleteTodo } = TodoStore.useContainer();

  useEffect(() => {
    readTodos();
  }, [readTodos]);

  return (
    <Container>
      <List>
        {todos.map((todo, i) => {
          return <TodoItem todo={todo} onClick={() => deleteTodo(i)} />;
        })}
      </List>
    </Container>
  );
};
