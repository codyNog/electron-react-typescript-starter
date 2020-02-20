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

export const createTodoData = async (data: Todo) => {
  await todosTable().add(data);
};

export const readTodosTable = async (): Promise<TodoData[]> => {
  return await todosTable().toArray();
};

export const deleteTodoData = async (index: number) => {
  const array = await readTodosTable();
  const targetId = array[index].id;
  todosTable().delete(targetId);
};
