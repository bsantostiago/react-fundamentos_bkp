import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }

    body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    body,
    h1,
    h2,
    h3,
    p,
    hr {
        margin: 0;
        padding: 0;
    }

`;

export default EstilosGlobais;