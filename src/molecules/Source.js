import React from 'react';
import propTypes from 'prop-types';

const Source = ({ media, srcSet }) => (
	<source media={media} srcSet={srcSet} />
);

Source.propTypes = {
	srcSet: propTypes.string.isRequired,
	media: propTypes.string,
};

Source.defaultProps = {
	media: '',
};

export { Source };
