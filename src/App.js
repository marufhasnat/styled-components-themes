// import './assets/css/dark.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import { ButtonContainer } from './components/styles/Container.styles';
import GlobalStyle from './components/styles/Global.styles';
import Tutorial from './components/Tutorial';

export default function App() {
    const [theme, setTheme] = useState({mode: 'light'});
    const themeToggler = () => {
      theme.mode === "light" ? setTheme({mode: "dark"}) : setTheme({mode: "light"});
    }
    return (
        <>
            <ThemeProvider theme={theme}>
              <ButtonContainer onClick={themeToggler} >
                <Button text="Change Theme" />
              </ButtonContainer>
              <GlobalStyle />
              <Tutorial />
            </ThemeProvider>
        </>
    );
}
