import { useState } from "react";

import { useAtomState } from "@zedux/react";
import { todoItemsState } from "../../zedux/store";

import ArrowIcon from "../../assets/arrow-down.svg";
import { AddItemContainer } from "./styles";

export const AddItem: React.FC = () => {
  const [todoList, setTodoList] = useAtomState(todoItemsState);
  const [text, setText] = useState("");
  const addItem = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (text) {
      const newArray = [
        ...todoList,
        { id: Date.now(), label: text, done: false },
      ];
      setTodoList(newArray);
      localStorage.setItem("todos", JSON.stringify(newArray));
      setText("");
    }
  };

  return (
    <AddItemContainer>
      <form
        onSubmit={(e) => {
          addItem(e);
        }}
      >
        <button>
          <img src={ArrowIcon} alt="∨" />
        </button>
        <input
          id="1"
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </AddItemContainer>
  );
};
