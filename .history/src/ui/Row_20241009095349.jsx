import styled from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) => props.type === "horizontal" && css``}
`;

export default Row;
