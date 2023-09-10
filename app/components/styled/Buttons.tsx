import styled from "styled-components";
import { accent2, grey700, grey300, accent3, accent4 } from "./variables";

export const SubmitButton = styled.button`
  display: inline-block;
  border: none;
  margin-top: 2rem;
  background-color: ${accent2};
  color: ${grey700};
  font-weight: bold;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  transition-timing-function: ease-out;
  transition: 0.2s;
  cursor: pointer;
  font-weight: 700;

  &:disabled {
    cursor: none;
    background-color: black;
    border: 4px solid ${grey300};
    color: ${grey300};

    &:hover {
      cursor: auto;
      border: 4px solid ${grey300};
      outline: none;
      color: ${grey300};
    }
  }

  &:hover {
    outline: 4px solid ${accent3};
    background-color: transparent;
    color: ${accent4};
    transition-timing-function: ease-in;
    transition: 0.5s;
  }
`;
