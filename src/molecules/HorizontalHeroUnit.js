import React from 'react';
import PropTypes, { number } from 'prop-types';

import { Row                     } from '../atoms/Row';
import { Col 					 } from '../atoms/Col';
import { LazyProgressiveImage    } from './LazyProgressiveImage';
import { UnderlinedXLargeHeading } from '../atoms/UnderlinedHeading';
import { Source             	 } from '../../src/molecules/Source';
import { HorizontalLinkBar 		 } from './HorizontalLinkBar';
import { IconBar                 } from './IconBar';

const HorizontalHeroUnit = props => (
	<Row>
		<Col xs={7}>
			<LazyProgressiveImage src={props.image.src} ratio={props.image.ratio} fallbackSrc={props.image.fallbackSrc} >
				<Source srcSet={props.image.placeholder} />
			</LazyProgressiveImage>
		</Col>
		<Col xs={5}>
			<Row center="xs">
				<Col xs>
					<IconBar entities={[{ name: 'fish' }, { name: 'activityTime' }, { name: 'totalTime' }]} />
					<Row>
						<Col xs>
							<UnderlinedXLargeHeading>Biff med potetpuré, soppsaus og asparges</UnderlinedXLargeHeading>
						</Col>
					</Row>
				</Col>
			</Row>
		</Col>
	</Row>
);

HorizontalHeroUnit.propTypes = {
	image: PropTypes.shape({
		src: PropTypes.string.isRequired,
		ratio: PropTypes.number,
		fallbackSrc: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		difficulty: PropTypes.number,
		activityTime: PropTypes.number,
		totalTime: PropTypes.number,
	}).isRequired,
};

export { HorizontalHeroUnit	};
