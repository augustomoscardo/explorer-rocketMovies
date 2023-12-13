import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  /* display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content"
  ; */
`

export const Content = styled.div`
  /* grid-area: content; */
  padding: 50px 122px 58px;

  display: flex;
  flex: 1;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;

    a {
      height: 48px;
      padding: 32px;

      background-color: ${({ theme }) => theme.colors.pink};
      color: ${({ theme }) => theme.colors.gray_500};

      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  }

  > main {
    flex: 1;
    position: relative;

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