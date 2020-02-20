import React, { useEffect } from "react";
import {
  ListItemText,
  List,
  Container,
  Typography,
  Button
} from "@material-ui/core";
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
          const { title, memo, limit } = todo;
          return (
            <div
              key={title + memo + limit}
              style={{ display: "flex", alignItems: "center" }}
            >
              <ListItemText
                primary={title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                      style={{ marginRight: 8 }}
                    >
                      {limit}
                    </Typography>
                    {memo}
                  </React.Fragment>
                }
              />
              <Button
                variant={"contained"}
                color={"secondary"}
                onClick={() => deleteTodo(i)}
              >
                削除
              </Button>
            </div>
          );
        })}
      </List>
    </Container>
  );
};
