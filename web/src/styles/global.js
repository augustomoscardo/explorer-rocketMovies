import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.gray_800};
    color: ${({ theme }) => theme.colors.gray_100};
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    font-weight: 400;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 8px;
  } 

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.pink};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`