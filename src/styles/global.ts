import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: ${theme['bg-color']};
      color: ${theme['black']};
      -webkit-font-smoothing: antialiased;
    }
    
    body,
    input,
    textarea,
    
    button {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
  `}
`