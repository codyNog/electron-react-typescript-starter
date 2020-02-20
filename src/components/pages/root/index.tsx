import React from "react";
import { Root } from "../../templates/Root";
import { TodoStore } from "../../../store/global/todo";

export const RootPage: React.FC = () => {
  return (
    <TodoStore.Provider>
      <Root />
    </TodoStore.Provider>
  );
};
