import React from "react";
import { ListItemText, Typography, Button } from "@material-ui/core";
import { Todo } from "../../../types/todo";
interface Props {
  todo: Todo;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export const TodoItem: React.FC<Props> = ({ todo, onClick }) => {
  const { title, memo, limit } = todo;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
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
      <Button variant={"contained"} color={"secondary"} onClick={onClick}>
        削除
      </Button>
    </div>
  );
};
