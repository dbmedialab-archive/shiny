import React from 'react';
import propTypes from 'prop-types';

const Source = ({ media, srcSet }) => (
	<source media={media} data-srcset={srcSet} />
);
Source.displayName = 'Source';

Source.propTypes = {
	/** URL to image */
	srcSet: propTypes.string.isRequired,
	/** Media query string, e.g. (max-width: 75em) */
	media: propTypes.string,
};

Source.defaultProps = {
	media: '',
};

export { Source };
