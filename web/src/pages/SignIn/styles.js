import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  /* width: 100%; */
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 140px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 700;
    font-size: 48px;
    color: ${({ theme }) => theme.colors.pink};
  }

  > h2 {
    font-weight: 500;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray_50};

    align-self: flex-start;

    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray_200};

    align-self: flex-start;
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.colors.pink}
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
`