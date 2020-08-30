import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }


  #root,html,body {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    background: #f5f5f5;
  }


`
