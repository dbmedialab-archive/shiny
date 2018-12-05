import React from 'react';
import PropTypes from 'prop-types';
import { SvgIconWrapper } from './SvgIconWrapper';

import { ActivityTime        } from './ActivityTime';
import { Difficulty          } from './Difficulty';
import { Nut                 } from './Nut';
import { Fish                } from './Fish';
import { Gluten              } from './Gluten';
import { Pork                } from './Pork';
import { TotalTime           } from './TotalTime';
import { Vegan               } from './Vegan';
import { Vegetarian          } from './Vegetarian';
import { DoubleArrow         } from './DoubleArrow';
import { Star                } from './Star';
import { Lactose             } from './Lactose';
import { Egg                 } from './Egg';
import { ShellFish           } from './ShellFish';
import { Mail                } from './Mail';
import { Pinterest           } from './Pinterest';
import { FaceBook            } from './FaceBook';
import { Twitter             } from './Twitter';
import { User                } from './Avatar';
import { KK                  } from './KK';
import { Aller               } from './Aller';
import { Dagbladet           } from './Dagbladet';
import { OppskriftLogo       } from './OppskriftLogo';
import { OppskriftMobileLogo } from './OppskriftMobileLogo';
import { OppskriftLoader     } from './OppskriftLoader';
import { CircleWithText      } from './CircleWithText';
import { CrossedVideoCamera  } from './CrossedVideoCamera';
import { ExclamationMark     } from './ExclamationMark';
import { YouTube             } from './YouTube';
import { NotFound            } from './NotFound';
import { Play                } from './Play';

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
					default:
						return null;
					}
				})()}
		</SvgIconWrapper>
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

export { SvgIcon };
