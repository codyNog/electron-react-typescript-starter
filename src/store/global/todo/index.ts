import { useCallback, useState } from "react";
import { createContainer } from "unstated-next";
import {
  deleteTodoData,
  readTodosTable,
  createTodoData
} from "../../../lib/db";
import { Todo } from "../../../types/todo";

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = async (data: Todo) => {
    await createTodoData(data);
    setTodos(todos.concat(data));
  };

  const readTodos = useCallback(async () => {
    const array = await readTodosTable();
    setTodos(array);
  }, []);

  const deleteTodo = async (index: number) => {
    await deleteTodoData(index);
    const nextState = todos.slice();
    nextState.splice(index, 1);
    setTodos(nextState);
  };

  return { todos, setTodos, addTodo, readTodos, deleteTodo };
};

export const TodoStore = createContainer(useTodo);
