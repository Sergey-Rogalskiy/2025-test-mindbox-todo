import { useEffect, useRef } from "react";

import { useAtomState } from "@zedux/react";
import { todoItemsState } from "./zedux/store";

import { AddItem, TodoList, Options } from "./components";
import {
  Background,
  Decor,
  Header,
  InnerContainer,
  MainContainer,
} from "./styles";

const App: React.FC = () => {
  const [, setTodoList] = useAtomState(todoItemsState);
  const todos = localStorage.getItem("todos");
  const _initialTodoList = useRef(null);
  _initialTodoList.current = JSON.parse(todos || "[]");
  useEffect(() => {
    if (todos) {
      setTodoList(_initialTodoList.current || []);
    }
  }, [setTodoList, todos]);
  return (
    <Background>
      <Header>todos</Header>
      <MainContainer>
        <AddItem />
        <InnerContainer>
          <TodoList />
          <Options />
          <Decor $bottom="-0.3rem" $left="0.3rem" width="98%" />
          <Decor $bottom="-0.55rem" $left="0.5rem" width="96%" />
        </InnerContainer>
      </MainContainer>
    </Background>
  );
};

export default App;
