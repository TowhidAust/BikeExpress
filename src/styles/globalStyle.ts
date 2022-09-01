// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/*AntD overwrites*/
.custom-side-bar.ant-menu-dark .ant-menu-item {
  color: #334155 !important;
}

.custom-side-bar.ant-menu-dark .ant-menu-item:hover {
  color: #059669 !important;
}





*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
}

html {
  font-size: 62.5%;

  body {
    font-family: 'IBM Plex Sans', sans-serif; !important;
    line-height: 155%;
    font-size: 1.6rem;
  }
}


 /* Typography Utils */

 .text {
  &-center {
    text-align: center;
  }

  &-left {
    text-align: left;
  }

  &-right {
    text-align: right;
  }
}

.font {

  &-light {
    font-weight: 300;
  }
  
  &-normal {
    font-weight: 400;
  }

  &-bold {
    font-weight: 700;
  }

  &-medium {
    font-weight: 500;
  }

}
`;

export default GlobalStyle;
