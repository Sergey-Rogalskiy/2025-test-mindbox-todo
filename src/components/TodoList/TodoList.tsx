import { useAtomSelector, useAtomState } from "@zedux/react";
import { filteredTodoListSelector, todoItemsState } from "../../zedux/store";

import {
  CustomRadio,
  Element,
  ElementBody,
  Label,
  TodoListContainer,
} from "./styles";
import { ElementType } from "../../types/types";

export const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useAtomState(todoItemsState);
  const setDone = (e: React.FormEvent<EventTarget>, id: number) => {
    e.preventDefault();
    const index = todoList.findIndex((el) => el.id === id);
    let newArray = [
      ...todoList.slice(0, index),
      { ...todoList[index], done: !todoList[index].done },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newArray);
    localStorage.setItem("todos", JSON.stringify(newArray));
  };

  const visibleItems = useAtomSelector(filteredTodoListSelector);
  return (
    <TodoListContainer>
      {visibleItems.map((item: ElementType) => {
        return (
          <Element key={item.id}>
            <ElementBody onClick={(e) => setDone(e, item.id)}>
              <CustomRadio
                id={item.id.toString()}
                type="radio"
                checked={item.done}
                onChange={() => {}}
              />
              <Label htmlFor={item.id.toString()} checked={item.done}>
                {item.label}
              </Label>
            </ElementBody>
          </Element>
        );
      })}
    </TodoListContainer>
  );
};
