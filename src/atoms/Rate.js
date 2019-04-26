import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { RatingSymbol } from './RatingSymbol';

const Container = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	position: ${({ position }) => position || 'static'};
}`;

export class Rate extends Component {
	static propTypes = {
		'value': PropTypes.number,
		'maxValue': PropTypes.number,
		'editable': PropTypes.bool,
		'onChange': PropTypes.func,
		'primaryColor': PropTypes.string,
		'secondaryColor': PropTypes.string,
		'icon': PropTypes.string,
		'direction': PropTypes.string,
		'size': PropTypes.number,
		'size-sm': PropTypes.number,
	}

	static defaultProps = {
		'value': 0,
		'maxValue': 5,
		'editable': true,
		'onChange': value => value,
		'primaryColor': 'primary',
		'secondaryColor': 'secondary',
		'icon': 'star',
		'direction': 'row',
		'size': 3.2,
		'size-sm': null,
	}

	constructor(props) {
		super(props);
		const { value } = props;
		this.state = { value };
	}

	onChange = (val) => {
		const newValue = val + 1;
		const { value } = this.state;
		if (value !== newValue) {
			const { onChange } = this.props;
			onChange(newValue);
			this.setState({ value: newValue });
		}
	}

	render() {
		const { value } = this.state;
		const {
			maxValue, editable, icon: name, primaryColor, secondaryColor, direction, size, 'size-sm': sizeSm,
		} = this.props;
		const elements = [];
		for (let key = 0; key < maxValue; key += 1) {
			let percent = 100;
			const diff = value - key;
			if (diff < 1 && diff > 0) {
				percent = diff * 100;
			} else if (diff < 0) {
				percent = 0;
			}
			elements.push({
				key,
				name,
				editable,
				direction,
				percent,
				size,
				'color': value > key ? primaryColor : secondaryColor,
				'size-sm': sizeSm,
				// eslint-disable-next-line no-loop-func
				'onClick': () => editable && this.onChange(key),
			});
		}
		return (
			<Container direction={direction}>
				{elements.map(props => <RatingSymbol {...props} color={secondaryColor} percent={100} />)}
				<Container direction={direction} position="absolute">
					{elements.map(props => <RatingSymbol {...props} />)}
				</Container>
			</Container>
		);
	}
}
