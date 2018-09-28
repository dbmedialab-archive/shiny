import React, { Fragment } from 'react';
import styled, { keyframes } from 'react-emotion';

import {
	Row,
	Col,
	Heading,
	HugeHeading,
	ShinyLogo,
} from '../../src';

import { Code } from '../../src/atoms/Code';

const twirl = keyframes`
	from {
		transform: rotate(0);
	}
	27% {
		transform: rotate(20deg);
	}

	to {
		transform: rotate(-1440deg);
	}
`;


const Spinning = styled.div`
	&:hover {
		animation: ${twirl} 1.4s ease-out 1;
	}
`;

const Welcome = () => (
	<Fragment>
		<section>
			<Row between="sm">
				<Col>
					<HugeHeading>Shiny!</HugeHeading>
					<p>You have arrived at Shiny, a storybook of visual components.
					</p>
				</Col>
				<Col xs sm={3}>
					<Spinning><ShinyLogo /></Spinning>
				</Col>
			</Row>
		</section>
		<section>
			<Heading>Get started using shiny components</Heading>
			<p>Wrap your app in shiny&apos;s ThemeSelector, and pass it the slug of the
				theme you&apos;d like to use. (In the future, you will also be allowed to
				pass a theme object instead, allowing you to use a theme not defined in
				shiny itself.)
			</p>

			<p>The ThemeSelector component will look up your theme from the slug,
				deep merge it with the default theme and then pass it to
				emotion&apos;s ThemeProvider. This way we can be sure that all
				the properties that exist in the default theme is available on every
				theme - which makes it a lot easier both to write themed components and
				to create new themes.
			</p>

			<p>ThemeSelector will also inject globally the styles in the{' '}
				<code>global</code> property of your selected theme - allowing you to
				define font definitions and other global styles.
			</p>

			<Code language="jsx">
				{`
import React from 'react';
import { ThemeSelector as ShinyThemeProvider } from '@aller/shiny';
import { App } from './App';

const AppWithShinyTheme = props => (
	<ShinyThemeProvider themeSlug="default">
		<App {...props} />
	</ShinyThemeProvider>
);

export default AppWithShinyTheme;
				`}
			</Code>

			<p>After this initial setup, you are good to go and can use shiny
				components directly.
			</p>

			<Code language="jsx">
				{`
import React from 'react';

import {
	HugeHeading,
	BodyText,
} from '@aller/shiny'

const App = props => (
	<React.Fragment>
		<HugeHeading>Using Shiny</HugeHeading>
		<BodyText>OMG this is shiny</BodyText>
	</React.Fragment>
);

export default App;
				`}
			</Code>
		</section>

		<section>
			Remember to install the peerDependencies (see package.json).
		</section>
	</Fragment>
);

export default Welcome;
