import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
    }
`;

export default Global;