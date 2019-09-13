import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stripTags from 'striptags';

import {
	getColor,
	getVariable,
} from '../utils';

import { Article } from '../atoms/Article';
import { Kicker } from '../atoms/Kicker';
import { PlugHeading as DefaultHeading } from '../atoms/PlugHeading';
import { BlockLink } from '../atoms/BlockLink';
import { Labels as DefaultLabels } from './Labels';
import { LazyProgressiveImage } from './LazyProgressiveImage';
import { Source } from './Source';
import { Col } from '../atoms/Col';

const ArticleCol = Col.withComponent(Article);

const PlugLink = styled(BlockLink)`
	display: flex;
	flex-direction: column;

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

const Description = styled.p`
	order: ${props => props.order};
	color: ${getColor('type')};
	font-size: ${getVariable('uiRegularSize')};
	line-height: ${getVariable('uiRegularLineHeight')};
	margin-top: 0;
`;
Description.propTypes = {
	order: PropTypes.number,
};
Description.defaultProps = {
	order: 0,
};

const TrysilPlug = ({
	url,
	image,
	imageProps,
	ratio,
	title,
	fadeIn,
	Labels,
	labelsProps,
	labels,
	kicker,
	offset,
	Heading,
	sources,
	subtitle,
	preventBlur,
	headingProps,
	placeholderUrl,
	column,
	attributes,
	float,
}) => {
	const ArticleComponent = column ? ArticleCol : Article;
	return (
		<ArticleComponent float={float} {...column} {...attributes}>
			<PlugLink href={url}>
				{kicker && <Kicker order={1}>{kicker}</Kicker>}
				{image
				&& (
					<LazyProgressiveImage
						order={2}
						alt={title}
						ratio={ratio}
						offset={offset}
						src={placeholderUrl ? placeholderUrl : image}
						preventBlur={preventBlur}
						fadeIn={fadeIn}
						{...imageProps}
					>
						{sources.length === 0
						&& <Source srcSet={image} />
						}
						{sources.map((source, i) => <Source srcSet={source.url} media={source.media} key={`source-${i}`} />)}
					</LazyProgressiveImage>
				)
				}
				<Heading {...headingProps} order={3}>{stripTags(title, ['strong', 'em'])}</Heading>
				{subtitle && <Description order={4} itemProp="description">{subtitle}</Description>}
				{!!labels.length && <Labels {...labelsProps} labels={labels} />}
			</PlugLink>
		</ArticleComponent>
	);
};

TrysilPlug.displayName = 'TrysilPlug';

TrysilPlug.propTypes = {
	/** Extra attributes you want on the DOM-node. e.g. data-cxense_Tag */
	attributes: PropTypes.object, // eslint-disable-line
	/** Option to fadein the image. */
	fadeIn: PropTypes.bool,
	/** Will be passed through to ArticleComponent */
	float: PropTypes.oneOf(['left', 'right', 'none', 'inline-start', 'inline-end', 'inherit', 'initial', 'unset']),
	/** Text above the image plug. */
	kicker: PropTypes.string,
	/** Main link text. */
	title: PropTypes.string,
	/** Norwegian: "ingress" */
	subtitle: PropTypes.string,
	/** Primary source URL for the plug image. If it is empty, no image will be displayed. */
	image: PropTypes.string.isRequired,
	imageProps: PropTypes.shape({
		/** Overriding lazysizes data-expand:
		 * offset from viewport
		 * from which image loading is triggered */
		expand: PropTypes.number,
	}),
	/** Component to display the labels */
	Labels: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ render: PropTypes.func }),
	]),
	/** Props to pass on to the Heading component */
	labelsProps: PropTypes.shape({
		order: PropTypes.number,
	}),
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
	Heading: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ render: PropTypes.func }),
	]),
	/** Column object to decide wether the article should be a Col or not */
	column: PropTypes.shape({
		width: PropTypes.number,
		reverse: PropTypes.bool,
		xs: PropTypes.number,
		sm: PropTypes.number,
		md: PropTypes.number,
		lg: PropTypes.number,
		xsOffset: PropTypes.number,
		smOffset: PropTypes.number,
		mdOffset: PropTypes.number,
		lgOffset: PropTypes.number,
		children: PropTypes.node,
	}),
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
	attributes: {},
	column: null,
	fadeIn: false,
	float: 'initial',
	kicker: '',
	title: '',
	subtitle: '',
	imageProps: {},
	Labels: DefaultLabels,
	labelsProps: {
		order: 5,
	},
	labels: [],
	offset: 0,
	sources: [],
	Heading: DefaultHeading,
	headingProps: {},
	preventBlur: false,
	placeholderUrl: '',
};

export { TrysilPlug };
