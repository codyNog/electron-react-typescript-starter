import React from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { useTodoForm } from "../../../store/organisms/TodoForm";

export const TodoForm: React.FC = () => {
  const {
    title,
    setTitle,
    memo,
    setMemo,
    limit,
    setLimit,
    submit
  } = useTodoForm();

  return (
    <Container style={{ alignItems: "center" }}>
      <TextField
        label={"予定"}
        value={title}
        onChange={e => setTitle(e.currentTarget.value)}
      />
      <TextField
        label={"メモ"}
        value={memo}
        onChange={e => setMemo(e.currentTarget.value)}
        style={{ marginLeft: 8 }}
      />
      <TextField
        label={"日付"}
        type={"date"}
        value={limit}
        onChange={e => setLimit(e.currentTarget.value)}
        InputLabelProps={{
          shrink: true
        }}
        style={{ marginLeft: 8 }}
      />
      <Button
        variant="contained"
        color={"primary"}
        onClick={submit}
        style={{ marginLeft: 8 }}
      >
        Submit
      </Button>
    </Container>
  );
};
