import React from 'react';

import styled from 'styled-components';

import theme from '../../src/themes/default-theme';

import { Code } from '../../src/atoms/Code';
import { DemoContainer } from '../storybook-components';
import {
	HorizontalLinkBar,
	LinkBarButton,
	Heading,
	HugeHeading,
} from '../../src';

import { CollapsiblePanel } from '../../src/atoms/CollapsiblePanel';

const { colors } = theme;

const RelativeParent = styled.div`
		position: relative;
`;

class CollapsiblePanelStory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subMenuOpened: false,
		};

		this.toggleSubMenu = this.toggleSubMenu.bind(this);
	}

	toggleSubMenu() {
		this.setState({
			subMenuOpened: !this.state.subMenuOpened,
		});
	}

	render() {
		return (
			<section>
				<HugeHeading>
                    Header Overlay
				</HugeHeading>

				<p>
					An animated collapsible overlay
				</p>

				<p>
					Please note, that for panel to display properly, you should set parent's position to relative
				</p>

				<Heading>
                    Demo
				</Heading>
				<DemoContainer background="white">
					<RelativeParent>
						<HorizontalLinkBar overflow="visible" background={colors.white}>
							<LinkBarButton onClick={this.toggleSubMenu}>
								Button with overlay
							</LinkBarButton>
						</HorizontalLinkBar>

						<CollapsiblePanel opened={this.state.subMenuOpened}>
							<div>Content of panel</div>
						</CollapsiblePanel>
					</RelativeParent>
				</DemoContainer>

                <Heading>
                    Usage
                </Heading>
				<Code language="jsx">
					{`import { CollapsiblePanel } from '@aller/shiny';

const RelativeParent = styled.div\`
		position: relative
\`;

class PanelDemo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			subMenuOpened: false,
		};

		this.toggleSubMenu = this.toggleSubMenu.bind(this);
	}

	toggleSubMenu() {
		this.setState({
			subMenuOpened: !this.state.subMenuOpened,
		});
	}

	render() {
		return (
			<RelativeParent>
				<HorizontalLinkBar overflow="visible" background={colors.white}>
					<LinkBarButton onClick={this.toggleSubMenu}>
						Button with overlay
					</LinkBarButton>
				</HorizontalLinkBar>

				<CollapsiblePanel opened={this.state.subMenuOpened}>
					<div>Content of panel</div>
				</CollapsiblePanel>
			</RelativeParent>
		);
	}
}`}
				</Code>
			</section>
		);
	}
}

export default () => (
	<CollapsiblePanelStory />
);
