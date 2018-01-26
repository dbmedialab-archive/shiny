import React from 'react';

import { Row             } from '../../atoms/Row';
import { Col             } from '../../atoms/Col';
import { IconsBarWrapper } from '../../atoms/MainRecipe/IconsBarWrapper';
import { EasyDifficulty  } from '../MatIcons/EasyDifficulty';
import { ActivityTime    } from '../MatIcons/ActivityTime';
import { TotalTime       } from '../MatIcons/TotalTime';
import { Nut             } from '../MatIcons/Nut';
import { Gluten          } from '../MatIcons/Gluten';
import { Fish            } from '../MatIcons/Fish';
import { Pork            } from '../MatIcons/Pork';
import { Vegan           } from '../MatIcons/Vegan';
import { Vegetarian      } from '../MatIcons/Vegetarian';

function getIcons(entityList) {
	function getComponent(entity) {
		switch (entity.name) {
		case 'difficulty':
			return <EasyDifficulty />;
		case 'activityTime':
			return <ActivityTime />;
		case 'totalTime':
			return <TotalTime />;
		case 'nut':
			return <Nut />;
		case 'gluten':
			return <Gluten />;
		case 'fish':
			return <Fish />;
		case 'pork':
			return <Pork />;
		case 'vegan':
			return <Vegan />;
		case 'vegetarian':
			return <Vegetarian />;
		default:
			return null;
		}
	}

	return entityList.map((entity) => {
		return (
			<Col md={4}>
				{getComponent(entity)}
			</Col>
		);
	});
}

class IconsBar extends React.Component {

	render() {
		return (
			<IconsBarWrapper>
				<Row>{getIcons(this.props.entities)}</Row>
			</IconsBarWrapper>
		);
	}
}

export { IconsBar };
