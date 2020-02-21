import React from "react";
import "./App.css";
import { RootPage } from "./components/pages/root";
import { TodoStore } from "./store/global/todo";

const App: React.FC = () => {
  return (
    <TodoStore.Provider>
      <RootPage />
    </TodoStore.Provider>
  );
};

export default App;
