import styled, { css } from "styled-components";

const text = css`
  text-align: center;
`;
const boolT = true;

const Heading = styled.h1`
  font-size: ${boolT ? "30px" : "5px"};
  font-weight: 600;
  ${text}
`;

export default Heading;
