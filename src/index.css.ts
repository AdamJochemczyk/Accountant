import { createGlobalStyle } from "styled-components";
import {normalize} from 'styled-normalize';

export default createGlobalStyle`
  ${normalize};
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
  .error{
    &__field{
      border: solid 1px red;
    }
    &__text{
      font-weight:800;
    color: red;
    }
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