import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  *,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body,html{
    margin:0;
    padding:0;
    overflow: hidden;
  }
`

export default globalStyle
