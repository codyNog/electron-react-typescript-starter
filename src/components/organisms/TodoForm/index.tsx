import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";

export const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [limit, setLimit] = useState("");

  const submit = () => {
    if (!title || !memo || !limit) {
      return;
    }

    const data = { title, memo, limit };
    console.log(data);
  };

  return (
    <Container>
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
