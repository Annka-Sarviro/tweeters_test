import styled from "styled-components";

export const ButtonStyled = styled.button`
  min-width: 196px;
  padding: 14px 56px;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--color);
  color: var(--text-color);
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
  box-shadow: var(--shadow-button);

  &:hover {
    background-color: var(--accent-color);
  }
`;
