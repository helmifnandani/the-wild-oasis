import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${props => props.as === 'h1' && 
    
    font-size: 30px;
    font-weight: 600;
  }
`;

export default Heading;
