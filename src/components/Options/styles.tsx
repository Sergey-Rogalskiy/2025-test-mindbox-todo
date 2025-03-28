import styled from "styled-components";

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0.5rem;
`;
export const Active = styled.div`
  font-weight: 900;
`;

export const Counter = styled.div`
  box-sizing: border-box;
  margin: 0 0 0 10px;
  white-space: nowrap;
  font-size: 0.6rem;
`;
export const BtnClear = styled.button`
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 0.6rem;
  border: none;
  background-color: #0000;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  &:hover {
    color: #aaa;
  }
`;
export const BtnFilter = styled.button<{ selected: boolean; width: string }>`
  box-sizing: border-box;
  white-space: nowrap;
  font-size: 0.6rem;
  border: ${(props) => (props.selected ? "solid 1px #b5b5b5" : "none")};
  background-color: #0000;
  width: ${(props) => props.width};
  font-size: 0.6rem;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  &:hover {
    color: #aaa;
  }
`;
