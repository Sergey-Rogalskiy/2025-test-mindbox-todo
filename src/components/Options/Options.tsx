import { useAtomSelector, useAtomState } from "@zedux/react";
import { doneCountState, filterState, todoItemsState } from "../../zedux/store";

import { buttons } from "../../configuration/filters";
import { BtnClear, BtnFilter, Counter, OptionsContainer } from "./styles";

export const Options: React.FC = () => {
  const [filter, setFilter] = useAtomState(filterState);
  const doneCount = useAtomSelector(doneCountState);
  const [todoList, setTodoList] = useAtomState(todoItemsState);
  const clearCompleted = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    let newArray = [...todoList].filter(({ done }) => !done);
    setTodoList(newArray);
    localStorage.setItem("todos", JSON.stringify(newArray));
  };
  return (
    <OptionsContainer>
      <Counter>{doneCount} items left</Counter>
      <div>
        {buttons.map((item, index) => {
          return (
            <BtnFilter
              key={index}
              selected={filter === item.name}
              onClick={() => {
                setFilter(item.name);
              }}
              width={item.width}
            >
              {item.label}
            </BtnFilter>
          );
        })}
      </div>
      <BtnClear onClick={(e) => clearCompleted(e)}>Clear completed</BtnClear>
    </OptionsContainer>
  );
};
