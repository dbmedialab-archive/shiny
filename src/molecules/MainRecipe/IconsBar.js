import React from 'react';
import PropTypes from 'prop-types';

import { Row             } from '../../atoms/Row';
import { Col             } from '../../atoms/Col';
import { IconsBarWrapper } from '../../atoms/MainRecipe/IconsBarWrapper';
import { Difficulty      } from '../MatIcons/Difficulty';
import { ActivityTime    } from '../MatIcons/ActivityTime';
import { TotalTime       } from '../MatIcons/TotalTime';
import { Nut             } from '../MatIcons/Nut';
import { Gluten          } from '../MatIcons/Gluten';
import { Fish            } from '../MatIcons/Fish';
import { Pork            } from '../MatIcons/Pork';
import { Vegan           } from '../MatIcons/Vegan';
import { Vegetarian      } from '../MatIcons/Vegetarian';

class IconsBar extends React.Component {
	static getIcons(entityList) {
		function getComponent(entity) {
			switch (entity.slug) {
			case 'difficulty':
				return <Difficulty value={entity.value} />;
			case 'activityTime':
				return <ActivityTime value={entity.value} />;
			case 'totalTime':
				return <TotalTime value={entity.value} />;
			case 'nøtter':
				return <Nut />;
			case 'gluten':
				return <Gluten />;
			case 'fisk':
				return <Fish />;
			case 'uten-svinekjott':
				return <Pork />;
			case 'vegan':
				return <Vegan />;
			case 'vegetar':
				return <Vegetarian />;
			default:
				return null;
			}
		}

		return entityList.map((entity) => {
			return (
				<Col md={4}>
					{ getComponent(entity) }
				</Col>
			);
		});
	}

	render() {
		const { entities } = this.props;
		return (
			<IconsBarWrapper>
				<Row>{ IconsBar.getIcons(entities) }</Row>
			</IconsBarWrapper>
		);
	}
}

IconsBar.propTypes = {
	entities: PropTypes.shape({
		name: PropTypes.string,
		value: PropTypes.number,
	}),
};

IconsBar.defaultProps = {
	entities: {
		name: '',
		value: 0,
	},
};

export { IconsBar };
