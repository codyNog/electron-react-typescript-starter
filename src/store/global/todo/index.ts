import { useState, useCallback } from "react";
import { createContainer } from "unstated-next";
import { Todo } from "../../../types/todo";
import {
  readTodosTable,
  deleteTodoData,
  createTodoData
} from "../../../lib/db";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = async (todo: Todo) => {
    await createTodoData(todo).catch(() => console.log("error!"));
    setTodos(todos.concat(todo));
  };

  const readTodos = useCallback(async () => {
    const todos = await readTodosTable();
    setTodos(todos);
  }, []);

  const deleteTodo = async (index: number) => {
    await deleteTodoData(index);
    const nextState = [...todos];
    nextState.splice(index, 1);
    setTodos(nextState);
  };

  return { todos, setTodos, addTodo, readTodos, deleteTodo };
};

export const TodoStore = createContainer(useTodo);
