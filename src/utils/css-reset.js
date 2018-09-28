/* eslint-disable max-len */

/**
 * Extensive reset styles.
 *
 * Notably resets 1rem to 10px.
 */
export const cssReset = `
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, font, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		word-wrap: break-word;
	}

	html {
		font-size: 62.5%; /* Corrects text resizing oddly in IE6/7 when body font-size is set using em units http://clagnut.com/blog/348/#c790 */
		-webkit-text-size-adjust: 100%; /* Prevents iOS text size adjust after orientation change, without disabling user zoom */
		-ms-text-size-adjust:     100%; /* www.456bereastreet.com/archive/201012/controlling_text_size_in_safari_for_ios_without_disabling_user_zoom/ */
	}

	*,
	*::before,
	*::after { /* apply a natural box layout model to all elements; see http://www.paulirish.com/2012/box-sizing-border-box-ftw/ */
		box-sizing: border-box;
	}

	body {
		font-size: 1.6rem; /* Reset the body text to 16px */
		line-height: 1;
		background: transparent;
	}

	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
		display: block;
	}

	/* HTML5 hidden-attribute fix for newer browsers */
	*[hidden] {
	    display: none;
	}

	ol, ul {
		list-style: none;
	}

	/* tables still need 'cellspacing="0"' in the markup */
	table {
		border-collapse: separate;
		border-spacing: 0;
	}

	caption, th, td {
		font-weight: normal;
		text-align: left;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}

	a:focus {
		outline: thin dotted;
	}

	a:hover,
	a:active {
		outline: 0;
	}

	a {
		img {
			border: 0;
		}
	}

	p {
		margin-bottom: 1em;
	}
`;
/* eslint-disable max-len */
