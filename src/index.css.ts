import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    width:100%;
  }
  a{
    text-decoration: none;
  }
  @media (min-width: 1025px) {
    .hideOnDesktop {
        display: none;
    }
}
@media (max-width:1024px){
  .hideOnMobile{
    display:none;
  }
}
`;