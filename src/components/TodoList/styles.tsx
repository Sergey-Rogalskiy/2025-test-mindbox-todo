import styled from "styled-components";

export const TodoListContainer = styled.ul`
  background-color: #fff;
  margin: 0;
  padding: 0;
`;
export const Element = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: solid 1px #f5f5f5;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const ElementBody = styled.span`
  width: 100%;
  cursor: pointer;
  &:hover Label {
    color: #aaa;
  }

  &:hover Label::before {
    background-color: #ddd;
  }
`;

export const CustomRadio = styled.input`
  width: 30px;
  position: absolute;
  z-index: -1;
  opacity: 0;
  cursor: pointer;

  + Label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  + Label::before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: #0000;
    border: solid 1px #000;
    box-sizing: border-box;
    border-radius: 50%;
    margin-right: 20px;
  }
  &:checked + Label::before {
    background: url("check.png");
    height: 1rem;
    width: 1rem;
    background-size: 1rem;
    background-position: 50% 50%;
    background-size: 90%;
    background-repeat: no-repeat;
  }
  &:active + Label::before {
    background-color: #aaa;
  }
  &:focus + Label::before {
    background-color: #aaa;
  }
`;

export const Label = styled.label<{ checked: boolean }>`
  color: ${(props) => (props.checked ? "#aaa" : "default")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "default")};
  padding: 0 0 0 0.7rem;
  cursor: pointer;
`;
