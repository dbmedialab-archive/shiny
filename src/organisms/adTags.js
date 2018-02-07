import React from 'react';
import propTypes from 'prop-types';

import AdTagsMolecule from '../molecules/MatAdTags/adTags';

const AdTags = props => (
	<AdTagsMolecule tags={props.tags} />
);
AdTags.propTypes = {
	tags: propTypes.array, // eslint-disable-line
};

export { AdTags };
