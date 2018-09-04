import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import stripTags from 'striptags';

import {
	getColor,
	getVariable,
} from '../utils';

import { Article } from '../atoms/Article';
import { Kicker } from '../atoms/Kicker';
import { PlugHeading as DefaultHeading } from '../atoms/PlugHeading';
import { BlockLink } from '../atoms/BlockLink';
import { Labels } from './Labels';
import { LazyProgressiveImage } from './LazyProgressiveImage';
import { Source } from './Source';

const PlugLink = styled(BlockLink)`
	&:focus {
		outline: none;
		box-shadow: 0 0 .3rem .1rem #08e;

		&:hover {
			box-shadow: none;
		}
	}

	&:hover {
		text-decoration: none;

		h1 {
			text-decoration:underline;
		}
	}

	&:active {
		opacity: 0.8;
	}
`;

// @TODO Use sizes from theme
const Description = styled.p`
	color: ${getColor('type')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
`;

const TrysilPlug = ({
	url,
	image,
	ratio,
	title,
	fadeIn,
	labels,
	kicker,
	offset,
	Heading,
	sources,
	subtitle,
	preventBlur,
	headingProps,
	placeholderUrl,
}) => (
	<Article>
		<PlugLink href={url}>
			{kicker && <Kicker>{kicker}</Kicker>}
			{image
				&& (
					<LazyProgressiveImage
						alt={title}
						ratio={ratio}
						offset={offset}
						fallbackSrc={image}
						src={placeholderUrl ? placeholderUrl : image}
						preventBlur={preventBlur}
						fadeIn={fadeIn}
					>
						{sources.length === 0
						&& <Source srcSet={image} />
						}
						{sources.map((source, i) => <Source srcSet={source.url} media={source.media} key={`source-${i}`} />)}
					</LazyProgressiveImage>
				)
			}
			<Heading {...headingProps}>{stripTags(title, ['strong', 'em'])}</Heading>
			{subtitle && <Description itemProp="description">{subtitle}</Description>}
			{labels && <Labels labels={labels} />}
		</PlugLink>
	</Article>
);

TrysilPlug.propTypes = {
	kicker: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	image: PropTypes.string.isRequired,
	labels: PropTypes.arrayOf(PropTypes.shape({
		backgroundColor: PropTypes.string,
		backgroundHoverShade: PropTypes.oneOf(['', 'dark', 'light', 'lighter']),
		textColor: PropTypes.string,
		text: PropTypes.string,
	})),
	url: PropTypes.string.isRequired,
	placeholderUrl: PropTypes.string,
	offset: PropTypes.number,
	sources: PropTypes.arrayOf(PropTypes.object),
	ratio: PropTypes.number.isRequired,
	Heading: PropTypes.func,
	headingProps: PropTypes.shape({
		skin: PropTypes.shape({
			backgroundColor: PropTypes.string,
			textColor: PropTypes.string,
			needsPadding: PropTypes.bool,
		}),
	}),
	preventBlur: PropTypes.bool,
};
TrysilPlug.defaultProps = {
	kicker: '',
	title: '',
	subtitle: '',
	labels: [],
	offset: 0,
	sources: [],
	Heading: DefaultHeading,
	headingProps: {},
	preventBlur: false,
	placeholderUrl: null,
};

export { TrysilPlug };
