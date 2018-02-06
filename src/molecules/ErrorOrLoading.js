import React from 'react';
import propTypes from 'prop-types';

import { NoonLoader as Loader } from '..';

const ErrorOrLoading = ({ loading, error, ...rest }) => {
	return (
		<div>
			{error && <p {...rest}>{error}</p>}
			{!error && <Loader {...rest} />}
		</div>
	);
};

ErrorOrLoading.propTypes = {
	loading: propTypes.bool,
	error: propTypes.string,
};

ErrorOrLoading.defaultProps = {
	loading: null,
	error: null,
};

export default ErrorOrLoading;
