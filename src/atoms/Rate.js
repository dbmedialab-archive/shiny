import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { RatingSymbol } from './RatingSymbol';

const Container = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	position: ${({ position }) => position || 'static'};
	cursor: ${({ editable }) => (editable ? 'pointer' : 'inherit')};
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
		this.state = { value, current: 0 };
	}

	onChange = (newValue) => {
		const { editable } = this.props;
		const { value } = this.state;
		if (value !== newValue && editable) {
			const { onChange } = this.props;
			onChange(newValue);
			this.setState({ value: newValue });
		}
	}

	onMouseMove = (current) => {
		const { editable } = this.props;
		editable && this.setState({ current });
	};

	onMouseLeave = () => this.setState({ current: 0 });

	render() {
		const { value, current } = this.state;
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
			if (key < current) {
				percent = 100;
			}
			elements.push({
				key,
				name,
				editable,
				direction,
				percent,
				size,
				'onMouseMove': () => this.onMouseMove(key + 1),
				'size-sm': sizeSm,
				// eslint-disable-next-line no-loop-func
				'onClick': () => this.onChange(key + 1),
			});
		}
		return (
			<Container direction={direction}>
				{elements.map(props => <RatingSymbol {...props} color={secondaryColor} percent={100} />)}
				<Container direction={direction} position="absolute">
					{elements.map(
						props => (
							props.key < value || props.key < current
						) && <RatingSymbol color={primaryColor} onMouseLeave={this.onMouseLeave} {...props} />
					)}
				</Container>
			</Container>
		);
	}
}
