import styled from 'styled-components';

const CustomButton = styled.button<{ primary?: boolean }>`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid ${({ primary }) => (primary ? "white" : "black")};
  border-radius: 3px;
  font-weight: 800;
  padding: 5px 10px;
  color: ${({ primary }) => (primary ? "white" : "black")};
  transition: background-color 0.3s ease-in-out;
  margin-right: 1rem;
  &:hover {
    background-color: ${({ primary }) => (primary ? "black" : "white")};
    color: ${({ primary }) => (primary ? "white" : "black")};
  }
`;
export default CustomButton;