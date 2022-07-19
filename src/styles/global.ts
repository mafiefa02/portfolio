import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Montserrat";
        color: white;
    }

    ::-webkit-scrollbar {
        width: 10px;
        background-color: #121212;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(255,100,94, 0.5);
    }
`;

export default GlobalStyle;
