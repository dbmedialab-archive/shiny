import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { getColor, getVariable } from '../utils';

import { LoadingSearchIcon } from '../atoms/loaders/LoadingSearchIcon';
import { FontIcon } from '../atoms/FontIcon';

const Search = styled.div`
  position: relative;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom
		: (`${1 / 2 * props.theme.variables.unitlessVerticalBase}rem`))};
  background-color: ${getColor('white')};
  font-size: 1.6rem;
  box-shadow: ${props => (props.shadow ? props.shadow : `0 0.3rem 0.3rem ${getColor('grayTint')(props)}`)};
  overflow: hidden;
  box-sizing: border-box;
  border-bottom: ${props => props.borderBottom};

  * {
  	box-sizing: border-box;
  }
`;

const SearchIcon = styled(FontIcon)`
	color: ${props => props.color};
	font-size: ${props => props.iconSize};
`;

const SearchFieldInput = styled.input`
	 width: 80%;
	 padding: ${getVariable('horizontalBase')};
	 border: 0;
	 outline: none;
	 font-size: ${props => props.fontSize};
`;

const IconContainer = styled.button`
	 width: 20%;
	 height: 100%;
	 padding: ${getVariable('horizontalBase')};
	 border: 0;
	 outline: none;
	 background-color: ${props => (props.backgroundColor ? props.backgroundColor : getColor('primary'))};
	 font-size: ${props => props.iconSize};
	 cursor: pointer;
	 top: 10px;
`;

class SearchField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText: '',
			isLoading: props.isLoading,
		};
	}

	handleTextChange = (event) => {
		// const {
		// 	handleSearchTextChange,
		// } = this.props;

		// handleSearchTextChange(event.target.value);
		this.setState({
			searchText: event.target.value,
		});
	};

	searchNow = () => {
		const {
			handleUserTypedSearch,
		} = this.props;

		const {
			searchText,
		} = this.state;

		handleUserTypedSearch(searchText);
	};

	searchNowIfEnter = (event) => {
		if (event.keyCode === 13) {
			this.searchNow();
		}
	};

	render() {
		const {
			searchTextVisible,
			color,
			backgroundColor,
			fontSize,
			shadow,
			iconSize,
			marginBottom,
			searchText: placeholder,
		} = this.props;

		const {
			isLoading,
			searchText,
		} = this.state;

		const value = (searchTextVisible) ? searchText : '';

		return (
			<Search marginBottom={marginBottom}>
				<SearchFieldInput
					type="text"
					value={value}
					placeholder={placeholder}
					onChange={this.handleTextChange}
					onKeyDown={this.searchNowIfEnter}
					shadow={shadow}
					fontSize={fontSize}
				/>

				<IconContainer
					onClick={this.searchNow}
					backgroundColor={backgroundColor}
					iconSize={iconSize}
				>
					{isLoading ? <LoadingSearchIcon color="white" /> : <SearchIcon name="search" color={color} />}
				</IconContainer>
			</Search>
		);
	}
}

SearchField.propTypes = {
	searchText: PropTypes.string.isRequired,
	handleUserTypedSearch: PropTypes.func.isRequired,
	searchTextVisible: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	color: PropTypes.string,
	backgroundColor: PropTypes.string,
	shadow: PropTypes.string,
	fontSize: PropTypes.string,
	iconSize: PropTypes.string,
	marginBottom: PropTypes.string,
};

SearchField.defaultProps = {
	color: 'white',
	backgroundColor: '',
	shadow: '',
	fontSize: 'inherit',
	iconSize: 'inherit',
	marginBottom: '',
};

export { SearchField };
