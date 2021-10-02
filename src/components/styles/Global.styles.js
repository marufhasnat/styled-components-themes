import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } body{
        background-color: ${props => props.theme.mode === 'dark' ? '#262626' : '#f0f2f5'};
        color: ${props => props.theme.mode === 'dark' ? '#f0f2f5' : '#262626'};
    }
`;

export default GlobalStyle;
