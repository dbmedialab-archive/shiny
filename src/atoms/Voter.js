import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SvgIcon } from './SvgIcon';

const StyledSvgIcon = styled(SvgIcon)``;
const Container = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	${StyledSvgIcon} {
		& :hover {
			cursor: pointer;
		}
	}
}`;

export class Voter extends Component {
	static propTypes = {
		value: PropTypes.number,
		maxValue: PropTypes.number,
		editable: PropTypes.bool,
		onChange: PropTypes.func,
		primaryColor: PropTypes.string,
		secondaryColor: PropTypes.string,
		icon: PropTypes.string,
		direction: PropTypes.string,
	}

	static defaultProps = {
		value: 0,
		maxValue: 5,
		editable: true,
		onChange: value => value,
		primaryColor: 'primary',
		secondaryColor: 'secondary',
		icon: 'star',
		direction: 'row',
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
			maxValue, editable, icon: name, primaryColor, secondaryColor, direction,
		} = this.props;
		const elements = [];
		for (let i = 0; i < maxValue; i += 1) {
			elements.push({
				key: i,
				name,
				color: value > i ? primaryColor : secondaryColor,
			});
		}
		return (
			<Container direction={direction}>
				{elements.map((props, key) => (
					<StyledSvgIcon
						{...props}
						onClick={() => editable && this.onChange(key)}
					/>
				))}
			</Container>
		);
	}
}
