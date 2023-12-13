import styled from "styled-components";

export const Container = styled.header`
  /* grid-area: header; */

  display: flex;
  align-items: center;
  gap: 64px ;

  width: 100%;
  padding: 24px 123px;
  height: 105px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_500};

  > h2 {
    color: ${({ theme }) => theme.colors.pink};
  }

  > div {
    input {
      padding: 19px 24px;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 14px;
      font-weight: 700;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.gray_50};
    }

    button {
      background-color: transparent;
      border: 0;

      color: ${({ theme }) => theme.colors.gray_400};
      align-self: end;
    }
  }

  > img {
    width: 64px;
    height: 64px;
    
    border: 1px solid ${({ theme }) => theme.colors.gray_500};
    border-radius: 50%;
  }
`