/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { TrysilPlug } from '../../src/molecules/TrysilPlug';

import { getColor, getVariable } from '../../src/utils';

const SpecialLabel = styled.div`
	display: inline-block;
	margin: 0 calc(1/2 * ${getVariable('horizontalBase')});
	padding: ${getVariable('horizontalBase')};
	background: ${getColor('primary')};
	color: ${getColor('white')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};

	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
`;
const SpecialLabels = ({ labels }) => (
	<footer>
		{labels.map(label => (
			<SpecialLabel>{label.text}</SpecialLabel>
		))
		}
	</footer>
);
SpecialLabels.propTypes = {
	labels: PropTypes.arrayOf(
		PropTypes.shape({ text: PropTypes.string })
	),
};
SpecialLabels.defaultProps = {
	labels: [],
};

export default () => (
	<section>
		<HugeHeading>TrysilPlug</HugeHeading>
		<p>The Labels component in TrysilPlug can be swapped out by sending in another component in the Labels prop.</p>

		<Heading>Usage</Heading>
		<TrysilPlug
			Labels={SpecialLabels}
			kicker="Another day, another video"
			title="What should we plug today?"
			subtitle="I guess we should plug another video again."
			placeholderUrl="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
			image="https://2.dbstatic.no/68712816.jpg?imageId=68712816&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
			ratio={0.5}
			url="https://example.com"
			labels={[
				{
					text: 'Opinions',
					backgroundColor: 'orange',
				},
				{
					text: 'I am label',
					backgroundColor: 'blue',
				},
			]}
		/>
	</section>
);
