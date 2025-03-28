import { atom } from "@zedux/react";
import type { AtomGetters } from "@zedux/react";
import { buttons } from "../configuration/filters";

export const todoItemsState = atom("todoItemsState", [
  { done: true, id: 1, label: "Apply Sergei's CV" },
  { done: true, id: 2, label: "Check the app" },
  { done: false, id: 3, label: "Offer Sergey a job" },
]);
export const filterState = atom("filterState", "all");

export const doneCountState = ({ get }: AtomGetters) => {
  const todoList = get(todoItemsState);
  return todoList && todoList.filter((el) => !el.done).length;
};
export const filteredTodoListSelector = ({ get }: AtomGetters) => {
  const filter = get(filterState);
  const todoList = get(todoItemsState);
  switch (filter) {
    case buttons[0].name:
      return todoList;
    case buttons[1].name:
      return todoList.filter((item) => !item.done);
    case buttons[2].name:
      return todoList.filter((item) => item.done);
    default:
      return todoList;
  }
};
