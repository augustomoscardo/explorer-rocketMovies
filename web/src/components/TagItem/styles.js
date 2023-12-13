import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.colors.gray_700};
  color: ${({ theme, $isNew }) => $isNew ? theme.colors.gray_400 : theme.colors.white};

  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.colors.gray_400}` : "none"};
  border-radius: 10px;

  padding-right: 16px;

  > input {
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: 0;

    width: 100%;
    
    padding: 16px;
  }

  > button {
    border: none;
    background: none;
    
    svg {
      color: ${({ theme }) => theme.colors.pink};
    }
  }

  
`