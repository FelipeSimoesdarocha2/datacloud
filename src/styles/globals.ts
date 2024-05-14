import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root{
}

/* #RESET */
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
font-synthesis: none;
text-rendering:optimizeLegibility;
}

li { list-style: none; }

img::selection{
background: none;
}

label::selection{
background: none;
}

a,
img,
data,
span,
input,
button,
select,
textarea { display: block; }

a {
color: inherit;
text-decoration: none;
}

img { height: auto; }

input,
button,
select,
textarea {
background: none;
border: none;
font: inherit;
}

input,
select,
textarea {
outline: none;
}

button {
cursor: pointer;
}

html {
font-size: 10px;
scroll-behavior: smooth;
scroll-snap-type: y mandatory;
}

body,
h1,
h2,
h3,
p,
a,
blockquote {
text-decoration: none;
}

body {
font-family: "League Spartan", sans-serif;
}

::-webkit-scrollbar {
width: 8px !important;
}

::-webkit-scrollbar-thumb {
border-radius: 3px;
background: rgba(63, 67, 80, 0.24);
}

::-webkit-scrollbar-thumb:hover {
background: rgba(63, 67, 80, 0.32);
}

@media screen and (min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx) {
body {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
}
`;

export default Global;
