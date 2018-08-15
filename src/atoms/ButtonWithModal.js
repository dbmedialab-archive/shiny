import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { FontIcon  } from '..';

class ButtonWithModal extends Component {
	static propTypes = {
		Button: PropTypes.func.isRequired,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node,
		]),
		openedIcon: PropTypes.string,
		closedIcon: PropTypes.string,
		text: PropTypes.string,
		customStyles: PropTypes.object, // eslint-disable-line react/forbid-prop-types
		rootElement: PropTypes.string,
	}

	static defaultProps = {
		children: null,
		openedIcon: '',
		closedIcon: '',
		text: '',
		customStyles: null,
		rootElement: '',
	}

	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false,
		};
	}

	componentDidMount() {
		const { rootElement } = this.props;

		Modal.setAppElement(rootElement);
	}

	toggleModal() {
		const { modalIsOpen } = this.state;

		this.setState({ modalIsOpen: !modalIsOpen });
	}

	render() {
		const {
			Button,
			children,
			closedIcon,
			customStyles,
			openedIcon,
			text,
		} = this.props;
		const { modalIsOpen } =this.state;

		const icon = modalIsOpen ? openedIcon : closedIcon;

		return (
			<React.Fragment>
				<Button onClick={this.toggleModal}>
					<FontIcon name={icon} size="2" />
					{text}
				</Button>
				<Modal
					isOpen={modalIsOpen}
					style={customStyles}
				>
					{children}
				</Modal>

			</React.Fragment>
		);
	}
}

export { ButtonWithModal };
