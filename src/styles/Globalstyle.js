import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    * {
        box-sizing:border-box;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        background-image: linear-gradient(to right bottom,#00f260,#0575e6);
        color: #354358;
        background-attachment: fixed;
        height:100%;
    }
    a {
        text-decoration:none;
    }
    
    `;
