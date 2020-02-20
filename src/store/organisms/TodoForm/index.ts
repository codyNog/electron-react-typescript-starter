import { useState } from "react";
import { Todo } from "../../../types/todo";
import { createTodoData } from "../../../lib/db";

export const useTodoForm = () => {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [limit, setLimit] = useState("");

  const submit = () => {
    if (!title || !memo || !limit) {
      return;
    }

    const data: Todo = { title, memo, limit };
    createTodoData(data);
  };

  return { title, setTitle, memo, setMemo, limit, setLimit, submit };
};
