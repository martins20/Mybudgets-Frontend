import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #ffffff;
        --purple: #9b07e6;
        --pink: #a420ea;
        --white: #ffffff
        --yellow: #f3b919;
        --light-red: #ed337e;
        --light-blue: #337fef;
        --ligth-gray: #b9b9b9;
        --gray: #575757;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #f2f2f2;
        -webkit-font-smoothing: antialiased;
    }

    body, html, #root {
        width: 100%;
        height: 100%;
    }
    
    body, input, button {
        font-family: Roboto, sans-serif;
        font-size: 16px;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;
