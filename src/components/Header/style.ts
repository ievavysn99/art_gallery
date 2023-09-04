import styled, { keyframes } from 'styled-components';

const textColorAnimation = keyframes`
  0% {
    color: #ff00cc;
  }
  50% {
    color: #3333ff;
  }
  100% {
    color: #ff00cc;
  }
`;

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 36px;
    animation: ${textColorAnimation} 3s linear infinite; /* Apply the animation to text color */
  }
`;
