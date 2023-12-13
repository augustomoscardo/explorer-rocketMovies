import styled from "styled-components";

export const Container = styled.div`
  > header {
    padding: 64px 168px 60px;

    background-color: ${({ theme }) => theme.colors.gray_600};

    button {
      display: block;
      color: ${({ theme }) => theme.colors.pink};

      margin-bottom: 24px;

      display: flex;
      align-items: center;
      gap: 8px;

      border: none;
      background: none;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  width: 100%;

  margin: 64px auto 0;

  .user, .password {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    margin-bottom: 24px;

  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -166px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    background-color: ${({ theme }) => theme.colors.pink};
    border-radius: 50%;

    width: 48px;
    height: 48px;

    position: absolute;
    bottom: 4px;
    right: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: #312E38;
    }
  }
`