import { useState } from "react";
import { Todo } from "../../../types/todo";
import { TodoStore } from "../../global/todo";

export const useTodoForm = () => {
  const { addTodo } = TodoStore.useContainer();
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [limit, setLimit] = useState("");

  const submit = async () => {
    if (!title || !memo || !limit) {
      return;
    }

    const data: Todo = { title, memo, limit };
    await addTodo(data);
  };
  return { title, setTitle, memo, setMemo, limit, setLimit, submit };
};
