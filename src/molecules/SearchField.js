import styled from 'styled-components';
import React from 'react';
import propTypes from 'prop-types';

import {
	LoadingSearchIcon,
	FontIcon,
} from '..';

const Search = styled.div`
  position: relative;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom :
		(`${1 / 2 * props.theme.variables.unitlessVerticalBase}rem`))};
  background-color: ${props => props.theme.colors.white};
  font-size: 1.6rem;
  box-shadow: ${props => (props.shadow ? props.shadow : `0 0.3rem 0.3rem ${props.theme.colors.grayTint}`)};
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
	 padding: ${props => props.theme.variables.horizontalBase};
	 border: 0;
	 outline: none;
	 font-size: ${props => props.fontSize};
`;

const IconContainer = styled.button`
	 width: 20%;
	 height: 100%;
	 padding: ${props => props.theme.variables.horizontalBase};
	 border: 0;
	 outline: none;
	 background-color: ${props => (props.backgroundColor ? props.backgroundColor : props.theme.colors.primary)};
	 font-size: ${props => props.iconSize};
	 cursor: pointer;
	 top: 10px;
`;

class SearchField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText: '',
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

		handleUserTypedSearch(this.state.searchText);
	};

	searchNowIfEnter = (event) => {
		if (event.keyCode === 13) {
			this.searchNow();
		}
	};

	render() {
		const {
			searchTextVisible,
			isLoading,
			color,
			backgroundColor,
			fontSize,
			shadow,
			iconSize,
			marginBottom,
			searchText,
		} = this.props;

		const value = (searchTextVisible) ? this.state.searchText : '';

		return (
			<Search marginBottom={marginBottom} className="test">
				<SearchFieldInput
					type="text"
					value={value}
					placeholder={searchText}
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
	searchText: propTypes.string.isRequired,
	handleUserTypedSearch: propTypes.func.isRequired,
	searchTextVisible: propTypes.bool.isRequired,
	isLoading: propTypes.bool.isRequired,
	color: propTypes.string,
	backgroundColor: propTypes.string,
	shadow: propTypes.string,
	fontSize: propTypes.string,
	iconSize: propTypes.string,
	marginBottom: propTypes.string,
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
