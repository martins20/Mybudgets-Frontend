import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #ffffff;
        --purple: #9b07e6;
        --pink: #a420ea;
        --light-pink: #d585ff;
        --white: #ffffff;
        --yellow: #f3b919;
        --light-red: #ed337e;
        --light-blue: #337fef;
        --light-gray: #b9b9b9;
        --gray: #575757;

        font-size: 60%;
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
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
        font-size: 3rem;
    }

    button {
        cursor: pointer;
    }
`;
