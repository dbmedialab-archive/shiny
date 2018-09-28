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
	/** Text above the image plug. */
	kicker: PropTypes.string,
	/** Main link text. */
	title: PropTypes.string,
	/** Norwegian: "ingress" */
	subtitle: PropTypes.string,
	/** Primary source URL for the plug image. If it is empty, no image will be displayed. */
	image: PropTypes.string.isRequired,
	/** i.e. keywords, tags, labels, categories */
	labels: PropTypes.arrayOf(PropTypes.shape({
		backgroundColor: PropTypes.string,
		backgroundHoverShade: PropTypes.oneOf(['', 'dark', 'light', 'lighter']),
		textColor: PropTypes.string,
		text: PropTypes.string,
	})),
	/** The user will be sent here if he clicks on the plug. */
	url: PropTypes.string.isRequired,
	/** If given, this image will be displayed before load. If empty, the 'image' prop will be used instead. */
	placeholderUrl: PropTypes.string,
	/** How close can the image be to the viewport before it is lazily loaded? */
	offset: PropTypes.number,
	/** Set of images to be rendered next to placeholderUrl and image */
	sources: PropTypes.arrayOf(PropTypes.object),
	/** Width of the image divided by height of the image */
	ratio: PropTypes.number.isRequired,
	/** Component to display the title */
	Heading: PropTypes.func,
	/** Props to pass on to the Heading component */
	headingProps: PropTypes.shape({
		skin: PropTypes.shape({
			backgroundColor: PropTypes.string,
			textColor: PropTypes.string,
			needsPadding: PropTypes.bool,
		}),
	}),
	/** Disable the blur effect on lazily loaded images */
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
	placeholderUrl: '',
};

export { TrysilPlug };
