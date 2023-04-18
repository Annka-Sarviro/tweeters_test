import styled from "styled-components";

export const Select = styled.select`
  display: block;
  border: none;
  border-radius: 10px;
  padding: 3px 10px;
  box-shadow: var(--shadow-button);
  background-color: var(--color);

  &:checked {
    border: none;
  }
`;
