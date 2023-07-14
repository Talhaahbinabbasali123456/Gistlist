import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
  }
  *{
    box-sizing: border-box;
  }
  .card_header-wrapper {
   
  }
  li {
    list-style-type: none;
     width: 700px; 
    margin: 0 auto;
    padding: 30px 10px;
  }
  .avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    overflow: hidden;
    margin-right: 10px
  }
  .card_header-wrapper {
    display: flex;
    align-items: center;
  }
  .card_header-wrapper .ml-auto {
    margin-left: auto;
  }
  .card_header-wrapper span {
    margin: 10px
  }
`;

export default GlobalStyles;
