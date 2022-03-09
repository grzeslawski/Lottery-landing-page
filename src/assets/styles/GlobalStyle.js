import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
  
  a {
    text-decoration: none;
    transition: text-decoration 0.2s ease;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  img {
    display: block;
    width: 100%;
  }
  
  .section {
    padding: 70px 0;
  }

  .ReactModal__Overlay {
    z-index: ${({ theme }) => theme.zIndexLevel.two};
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    background-color: rgba(0, 0, 0, 0.8) !important;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
  
  .ScratchCard__Container {
    margin: 0 auto;
    max-width: 100%;
  }
  
  .ScratchCard__Canvas {
    cursor: pointer;
    max-width: 100%;
  }

  .ScratchCard__Result {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    font: normal bold 30px/30px sans-serif;
  }
`;
