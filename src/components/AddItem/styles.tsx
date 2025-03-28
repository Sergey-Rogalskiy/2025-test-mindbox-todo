import styled from "styled-components";

export const AddItemContainer = styled.div`
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: solid 2px #f5f5f5;
  background-color: #fff;
  input {
    background-color: #0000;
    border: none;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.9rem;
    padding: 0 0.5rem;
    width: 90%;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    font-size: 0.9rem;
    color: #979797;
    font-style: italic;
    font-family: "Courier New", Courier, monospace;
  }

  button {
    margin: 0 0 0 0.3rem;
    background-color: #0000;
    border: none;
    width: 30px;
    height: 30px;
    font-size: 0.7rem;
    color: #000;
    padding: 0;
    line-height: 60%;
  }

  button:hover {
    color: #aaa;
  }
  form button {
    vertical-align: middle;
  }
`;
