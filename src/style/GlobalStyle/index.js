import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      background-color: #191F37;
      font-family: 'Poppins', sans-serif;
    .timerBlock{
      height: 100vh;
      display: flex;
      flex-direction: column;
      .main{
        flex: 1;
      }
  }

  .subtitle{
    color: gold;
    font-size: 12px;
  }

    ul{
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    a{
      text-decoration: none !important;
    }
  }
`;

export default GlobalStyle;
