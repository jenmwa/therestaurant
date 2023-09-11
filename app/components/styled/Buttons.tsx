import styled, { css } from "styled-components";
import {
  accent2,
  grey700,
  grey300,
  accent3,
  accent4,
  accent1,
} from "./variables";

export const Button = styled.button`
  display: inline-block;
  border: none;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  transition-timing-function: ease-out;
  transition: 0.2s;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${accent2};
  display: block;

  &:hover {
    outline: 4px solid ${accent3};
    background-color: black;
    color: ${accent4};
    transition-timing-function: ease-in;
    transition: 0.5s;
  }
`;

export const SecondaryButton = styled(Button)`
  display: block;

  background-color: black;
  color: ${accent4};
  border: 4px solid ${accent3};
  font-weight: 300;

  &:hover {
    border: 4px solid black;
    outline: 4px solid ${accent1};
    background-color: black;
    color: ${accent4};
    transition-timing-function: ease-in;
    transition: 0.5s;
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${accent2};
  color: ${grey700};

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

export const TimeButton = styled(Button)<{ isSelected: boolean }>`
  width: 45%;
  display: inline;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  background-color: black;
  color: ${accent4};
  border: 4px solid ${accent4};
  font-weight: 300;

  &:disabled {
    cursor: none;
    background-color: black;
    border: 4px solid ${grey300};
    color: ${grey300};
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${accent4};
      color: ${grey700};
      font-weight: bold;
    `}
`;
