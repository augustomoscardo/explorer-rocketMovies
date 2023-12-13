import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px 122px 85px;

  button {
    display: block;
    width: fit-content;
    color: ${({ theme }) => theme.colors.pink};

    margin-bottom: 24px;

    display: flex;
    align-items: center;
    gap: 8px;

    background: none;
    border: none;
  }

  > main {
    flex: 1;
    position: relative;

    width: 100%;

    > div {
      position: absolute;
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 24px;

      overflow-y: auto;
    }
  }
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > h2 {
    color: ${({ theme }) => theme.colors.gray_50};
    font-size: 36px;
    font-weight: 500;
  }
`

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding-right: 16px;

  > p {
    color: ${({ theme }) => theme.colors.gray_50};
    text-align: justify;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.gray_50};
  font-family: "Roboto", sans-serif;

  .user {
    display: flex;
    align-items: center;
    gap: 8px;

    > img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }

  .date {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.colors.pink};

      width: 16px;
      height: 16px;
    }
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;


  svg {
    color: ${({ theme }) => theme.colors.pink};

    width: 20px;
    height: 20px;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-family: "Roboto", sans-serif;

    padding: 8px 16px;

    background-color: #282124;
    border-radius: 8px;
  }
`