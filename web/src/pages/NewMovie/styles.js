import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

`

export const Content = styled.div`
  flex: 1;
  padding: 50px 122px 85px;

    > button {
      display: block;
      color: ${({ theme }) => theme.colors.pink};

      margin-bottom: 24px;

      display: flex;
      align-items: center;
      gap: 8px;

      background: none;
      border: none;
    }

    > div {
      flex: 1;
      position: relative;

      height: 100%;
      width: 100%;
      overflow-y: auto;
    }


`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  position: absolute;
  flex: 1;
  width: 100%;

  padding-right: 16px;
  

  h2 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray_50};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 24px;

    > h3 {
      font-size: 20px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.gray_300};
    }

    .tags {
      background-color: ${({ theme }) => theme.colors.gray_900};
      border-radius: 8px;
      
      padding: 16px;

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 24px;
    }
  }

  > div {
    width: 100%;

    button {
      width: 100%;
    }
  }

`