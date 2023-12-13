import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  padding: 19px 16px;

  border-radius: 10px;
  border: 0;
  resize: none;

  background-color: ${({ theme }) => theme.colors.gray_700};
  color: ${({ theme }) => theme.colors.gray_50};
`