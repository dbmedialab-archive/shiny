import React from 'react';
import PropTypes, { number } from 'prop-types';
import styled, { withTheme } from 'styled-components';

import { Row                     } from '../atoms/Row';
import { Col 					 } from '../atoms/Col';
import { LazyProgressiveImage    } from './LazyProgressiveImage';
import { UnderlinedLargeHeading  } from '../atoms/UnderlinedHeading';
import { Source             	 } from '../../src/molecules/Source';
import { IconBar                 } from './IconBar';

const PaddedCol = withTheme(styled(Col)`
	padding: ${props => props.theme.variables.verticalBase} 0;
`);

const HorizontalHeroUnit = props => (
	<Row>
		<Col xs={7}>
			<LazyProgressiveImage src={props.image.src} ratio={props.image.ratio} fallbackSrc={props.image.fallbackSrc} >
				<Source srcSet={props.image.placeholder} />
			</LazyProgressiveImage>
		</Col>
		<Col xs={5}>
			<Row center="xs">
				<PaddedCol xs>
					<Row center="xs">
						<Col xs={8}>
							<IconBar entities={[{ name: 'difficulty', text: 'hello', value: 1 }, { name: 'activity' }, { name: 'total-time' }]} />
						</Col>
					</Row>
					<Row>
						<Col xs>
							<UnderlinedLargeHeading>Biff med potetpuré, soppsaus og asparges</UnderlinedLargeHeading>
						</Col>
					</Row>
				</PaddedCol>
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
