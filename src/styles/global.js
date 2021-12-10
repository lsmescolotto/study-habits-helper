import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
	--white:#fff;
	--black-100:#0B1E27;
	--black-50:#2C373F;
	--grey-100:#939393;
	--grey-90:#D2D2D2;
	--grey-80:rgba(197, 197, 197, 0.5);
	--grey-60:#EFEFEF;
	--grey-40:#F5F5F5;
	--grey-20:rgba(245, 245, 245, 0.75);
	--blue-100:#003459;
	--blue-80:#00486E;
	--blue-60:#189AD3;
	--blue-50:#00A8E8;
	--blue-40:#BAD7E2;
	--blue-20:#DAEEF7;
	--yellow-60:#F4A640;
	--yellow-50:#FEB546;
	--pink-60:#F24A75;
	--pink-50:#FF5B7E;
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
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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
	border-collapse: collapse;
	border-spacing: 0;
}`;

export default GlobalStyle;
