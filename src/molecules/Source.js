import React from 'react';
import PropTypes from 'prop-types';

const Source = ({ media, srcSet }) => (
	<source media={media} data-srcset={srcSet} />
);
Source.displayName = 'Source';

Source.propTypes = {
	/** URL to image */
	srcSet: PropTypes.string.isRequired,
	/** Media query string, e.g. (max-width: 75em) */
	media: PropTypes.string,
};

Source.defaultProps = {
	media: '',
};

export { Source };
