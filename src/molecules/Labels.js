import React, { Fragment } from 'react';
import propTypes from 'prop-types';

import { Label  } from '../atoms/Label';

const Labels = ({ labels }) => (
	<Fragment>
		{labels.map(label => (
			<Label
				key={label.text}
				backgroundColor={label.backgroundColor}
				backgroundHoverShade={label.backgroundHoverShade}
				textColor={label.textColor}
			>{label.text}
			</Label>
		))
		}
	</Fragment>
);

Labels.propTypes = {
	labels: propTypes.arrayOf(propTypes.shape({
		backgroundColor: propTypes.string,
		backgroundHoverShade: propTypes.oneOf(['', 'dark', 'light', 'lighter']),
		textColor: propTypes.string,
		text: propTypes.string,
	})).isRequired,
};

export { Labels };
