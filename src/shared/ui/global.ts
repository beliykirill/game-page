import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    #popup {
        z-index: 1;
    }
 
    html, body, #__next {
        scroll-behavior: smooth;
       
        height: 100%;
    }
    
    *, *::before, *::after {
        box-sizing: border-box;
    } 

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    input:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }

    [class*="yeps-pusher"] {
      display: none !important;
    }

    button,
    input,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        user-select: text;
        touch-action: manipulation;
    }
    
    button,
    input,
    select {
        text-transform: none;
        appearance: none;
    }
    
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }
    
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    body {
        width: 100%;
        height: 100%;
        overflow: hidden auto;
        font-family: 'Inter', sans-serif;
        background-color: ${(p) => p.theme.surfaceBackground};
        color: ${(p) => p.theme.textMain};
        font-size: 16px;
    }

    h1,
    h2, 
    h3,
    h4,
    h5 {
        margin: 0;
        font-family: 'Inter', sans-serif;
        color: ${(p) => p.theme.textMain};
    }
`;

export const DisabledScrollStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  
  body {
    overflow: hidden !important;
    font-family: 'Inter', sans-serif;
  }
`;
