import { css } from 'react-emotion';

const sizes = {
	xlarge: 1920,
	large: 1440,
	medium: 1024,
	small: 640,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
	// use em in breakpoints to work properly cross-browser and support users
	// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
	const emSize = sizes[label] / 16;
	accumulator[label] = (...args) => css`
	  @media (max-width: ${emSize}em) {
		 ${css(...args)}
	  }
	`;
	return accumulator;
}, {});
