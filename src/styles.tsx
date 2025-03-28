import styled from "styled-components";

export const Background = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;

export const MainContainer = styled.div`
  margin: auto;
  width: 50%;
  font-family: "Courier New", Courier, monospace;
  min-width: 350px;
  box-shadow: 0px 5px 18px -4px #0005;
`;
export const InnerContainer = styled.div`
  position: relative;
`;

export const Header = styled.h1`
  text-align: center;
  font-weight: 100;
  font-family: sans-serif;
  color: #e5dbda;
  font-size: 4rem;
  margin: 0;
`;
export const Decor = styled.div<{
  $bottom: string;
  $left: string;
  width: string;
}>`
  text-align: center;
  width: ${(props) => props.width};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
  position: absolute;
  background-color: white;
  height: 0.2rem;
  border-bottom: solid 1px #d5d5d5;
  border-left: solid 1px #d5d5d5;
  border-right: solid 1px #d5d5d5;
`;
