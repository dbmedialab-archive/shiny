import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { SvgIconWrapper } from './SvgIconWrapper';

const ActivityTime = React.lazy(() => import('./ActivityTime'));
const Difficulty = React.lazy(() => import('./Difficulty'));
const Nut = React.lazy(() => import('./Nut'));
const Fish = React.lazy(() => import('./Fish'));
const Gluten = React.lazy(() => import('./Gluten'));
const Pork = React.lazy(() => import('./Pork'));
const TotalTime = React.lazy(() => import('./TotalTime'));
const Vegan = React.lazy(() => import('./Vegan'));
const Vegetarian = React.lazy(() => import('./Vegetarian'));
const DoubleArrow = React.lazy(() => import('./DoubleArrow'));
const Star = React.lazy(() => import('./Star'));
const Lactose = React.lazy(() => import('./Lactose'));
const Egg = React.lazy(() => import('./Egg'));
const ShellFish = React.lazy(() => import('./ShellFish'));
const Mail = React.lazy(() => import('./Mail'));
const Pinterest = React.lazy(() => import('./Pinterest'));
const CircleWithText = React.lazy(() => import('./CircleWithText'));
const FaceBook = React.lazy(() => import('./FaceBook'));
const Twitter = React.lazy(() => import('./Twitter'));
const User = React.lazy(() => import('./Avatar'));
const KK = React.lazy(() => import('./KK'));
const Aller = React.lazy(() => import('./Aller'));
const Dagbladet = React.lazy(() => import('./Dagbladet'));
const OppskriftLogo = React.lazy(() => import('./OppskriftLogo'));
const OppskriftMobileLogo = React.lazy(() => import('./OppskriftMobileLogo'));
const OppskriftLoader = React.lazy(() => import('./OppskriftLoader'));
const CrossedVideoCamera = React.lazy(() => import('./CrossedVideoCamera'));
const ExclamationMark = React.lazy(() => import('./ExclamationMark'));
const YouTube = React.lazy(() => import('./YouTube'));
const NotFound = React.lazy(() => import('./NotFound'));
const Play = React.lazy(() => import('./Play'));
const DagbladetVideoIcon = React.lazy(() => import('./DagbladetVideo'));
const BackNavIcon = React.lazy(() => import('./BackNav'));

const SvgIcon = (props) => {
	const {
		className,
		color,
		name,
		size,
		...rest
	} = props;

	// @TODO camelCase the prop "size-sm" so that we can use it just like other props
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<SvgIconWrapper size={size} size-sm={rest['size-sm']} color={color} className={className}>
				{
					(() => {
						switch (name) {
						case 'pinterest':
							return <Pinterest {...props} />;
						case 'mail':
							return <Mail {...props} />;
						case 'skalldyr':
							return <ShellFish {...props} />;
						case 'egg':
							return <Egg {...props} />;
						case 'laktose':
							return <Lactose {...props} />;
						case 'activity':
							return <ActivityTime {...props} />;
						case 'difficulty':
							return <Difficulty {...props} />;
						case 'nut':
							return <Nut {...props} />;
						case 'fish':
						case 'fisk':
							return <Fish {...props} />;
						case 'gluten':
							return <Gluten {...props} />;
						case 'pork':
						case 'uten-svinekjott':
							return <Pork {...props} />;
						case 'total-time':
							return <TotalTime {...props} />;
						case 'vegan':
							return <Vegan {...props} />;
						case 'vegetar':
						case 'vegetarian':
							return <Vegetarian {...props} />;
						case 'double-arrow':
							return <DoubleArrow {...props} />;
						case 'star':
							return <Star {...props} />;
						case 'user':
							return <User {...props} />;
						case 'facebook':
							return <FaceBook {...props} />;
						case 'twitter':
							return <Twitter {...props} />;
						case 'kk':
							return <KK {...props} />;
						case 'aller':
							return <Aller {...props} />;
						case 'dagbladet':
							return <Dagbladet {...props} />;
						case 'oppskrift-logo':
							return <OppskriftLogo {...props} />;
						case 'oppskrift-mobile-logo':
							return <OppskriftMobileLogo {...props} />;
						case 'oppskrift-loader':
							return <OppskriftLoader {...props} />;
						case 'circle-with-text':
							return <CircleWithText {...props} />;
						case 'crossed-video-camera':
							return <CrossedVideoCamera {...props} />;
						case 'not-found':
							return <NotFound {...props} />;
						case 'exclamation-mark':
						case 'exclamation-point':
						case 'exclamation':
							return <ExclamationMark {...props} />;
						case 'youtube':
							return <YouTube {...props} />;
						case 'play':
							return <Play {...props} />;
						case 'dagbladetVideo':
							return <DagbladetVideoIcon {...props} />;
						case 'backNav':
							return <BackNavIcon {...props} />;
						default:
							return null;
						}
					})()}
			</SvgIconWrapper>
		</Suspense>
	);
};

SvgIcon.propTypes = {
	'size': PropTypes.number,
	'size-sm': PropTypes.number,
	'name': PropTypes.string,
	'color': PropTypes.string,
	'className': PropTypes.string,
};
SvgIcon.defaultProps = {
	'size': 3.2,
	'size-sm': null,
	'name': '',
	'color': undefined,
	'className': '',
};

const AbsolutelyCenteredSvgIcon = styled(SvgIcon)`
	position: absolute;
	z-index: 1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin: auto;
`;

export {
	AbsolutelyCenteredSvgIcon,
	SvgIcon,
};
