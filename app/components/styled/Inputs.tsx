import styled from "styled-components";
import { FontParagraph, accent4, grey100, grey500 } from "./variables";

export const Label = styled.label`
  font-size: 1rem;
  display: block;
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
  font-family: ${FontParagraph};
  color: ${grey500};
  font-size: 1rem;
  width: 100%;
  margin: 0;
  background-color: ${accent4};
  padding: 1rem;
  border: none;
  outline: none;

  /* &[type="date"] {
    width: 100%;
    margin: 0;
    background-color: ${accent4};
    padding: 1rem;
    border: none;
    outline: none;
  } */

  ::-webkit-calendar-picker-indicator {
    background-color: ${grey100};
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
  }

  /* &[type="text"] {
    width: 100%;
    margin: 0;
    background-color: ${accent4};
    padding: 1rem;
    border: none;
    outline: none;
  }

  &[type="email"] {
    width: 100%;
    margin: 0;
    background-color: ${accent4};
    padding: 1rem;
    border: none;
    outline: none;
  } */
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  font-family: ${FontParagraph};
  font-family: ${FontParagraph};
  background-color: ${accent4};
  padding: 1rem;
  border: none;
  outline: none;
`;
