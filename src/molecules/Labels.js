import React from 'react';
import propTypes from 'prop-types';

import {
	HorizontalLinkBar,
	XSmallLinkBarHeading as Label,
} from '..';

const SemanticElement = ({ children }) => <footer>{children}</footer>;
SemanticElement.propTypes = {
	children: propTypes.node.isRequired,
};

const labelProps = {
	provideRightSpacer: true,
	useUnderline: false,
};

const linkBarProps = {
	background: 'transparent',
	shouldHavePadding: false,
	SemanticElement,
	zIndex: 3,
};

const Labels = ({ labels }) => (
	<HorizontalLinkBar {...linkBarProps}>
		{labels.map(label => (
			<Label
				key={label.text}
				backgroundColor={label.backgroundColor || 'primary'}
				textColor={label.textColor || 'white'}
				ALLCAPS
				{...labelProps}
			>{label.text}
			</Label>
		))
		}
	</HorizontalLinkBar>
);

Labels.propTypes = {
	labels: propTypes.arrayOf(propTypes.shape({
		backgroundColor: propTypes.string,
		textColor: propTypes.string,
		text: propTypes.string,
	})).isRequired,
};

export { Labels };
