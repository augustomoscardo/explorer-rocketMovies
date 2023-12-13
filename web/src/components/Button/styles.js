import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme, $isDelete }) => $isDelete ? theme.colors.gray_900 : theme.colors.pink};
  color: ${({ theme, $isDelete }) => $isDelete ? theme.colors.pink : theme.colors.gray_900};;

  border: 0;
  border-radius: 10px;
  padding: 0 16px;
  /* margin-top: 24px; */

  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`