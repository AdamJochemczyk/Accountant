import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  @media (min-width: 768px) {
    .hideOnDesktop {
        display: none;
    }
}
@media (max-width:769px){
  .hideOnMobile{
    display: none;
  }
}
`;