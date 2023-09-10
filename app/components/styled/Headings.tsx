import styled from "styled-components";
import {
  FontHeading,
  FontParagraph,
  accent1,
  accent2,
  accent3,
} from "./variables";

export const H1 = styled.h1`
  font-size: 4.5rem;
  font-family: ${FontHeading};
  color: ${accent1};
`;

export const H2 = styled.h2`
  font-size: 4rem;
  font-family: ${FontHeading};
  color: ${accent1};
`;

export const H3 = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  font-family: ${FontParagraph};
  color: ${accent2};
`;

export const H4 = styled.h4`
  font-size: 2.5rem;
  font-family: ${FontParagraph};
  color: ${accent2};
`;

export const H5 = styled.h5`
  font-size: 2rem;
  font-family: ${FontParagraph};
  color: ${accent3};
`;

export const H6 = styled.h6`
  font-size: 1.5rem;
  font-family: ${FontParagraph};
  font-weight: bold;
  color: ${accent3};
`;
