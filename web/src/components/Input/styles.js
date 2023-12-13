import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_700};
  
  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray_50};
    border: none;

    padding: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_400};
    }
  }

  > svg {
    color: ${({ theme }) => theme.colors.gray_400};

    margin-left: 16px;
  }
`