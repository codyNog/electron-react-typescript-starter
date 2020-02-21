import { useState } from "react";
import { Todo } from "../../../types/todo";
import { TodoStore } from "../../global/todo";

export const useTodoForm = () => {
  const { addTodo } = TodoStore.useContainer();
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [limit, setLimit] = useState("");

  const init = () => {
    setTitle("");
    setMemo("");
    setLimit("");
  };

  const submit = async () => {
    if (!title || !limit) return;

    const todo: Todo = {
      title,
      memo,
      limit
    };

    await addTodo(todo);
    init();
  };

  return { title, setTitle, memo, setMemo, limit, setLimit, submit };
};
