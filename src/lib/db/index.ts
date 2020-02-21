import Dexie from "dexie";
import { Todo } from "../../types/todo";

const db = new Dexie("MyDatabase");

db.version(1).stores({
  todos: "++id, title, memo, limit"
});

db.open();

interface TodoData extends Todo {
  id: number;
}

const todosTable = () => {
  return db.table("todos");
};

export const createTodoData = async (todo: Todo) => {
  await todosTable().add(todo);
};

export const readTodosTable = async () => {
  return await todosTable().toArray();
};

export const deleteTodoData = async (index: number) => {
  const todos = await readTodosTable();
  const targetId = todos[index].id;
  todosTable().delete(targetId);
};
