import React from 'react';
import { action } from '@storybook/addon-actions';
import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	// For the story
	Heading,
	HugeHeading,

	// For this component specifically
	HorizontalLinkBar,
	LinkBarButton,
	SmallLinkBarButton,
} from '../../src';

import theme from '../../src/themes/default-theme';

const { colors } = theme;

const ButtonStory = () => (
	<section>
		<HugeHeading>LinkBarButton</HugeHeading>
		<p>
			Provides buttons (<code>&lt;button&gt;</code> tags) that can contain a child (e.g. img) for
			HorizontalLinkBar.
		</p>
		<p>
			Similar to LinkBarLink, but allows using <code>onClick</code> instead of
			<code>href=&quot;&quot;</code>.
		</p>
		<p>Comes in two sizes, regular and small.</p>

		<Heading>Demo</Heading>
		<DemoContainer>
			<HorizontalLinkBar background={colors.white}>
				<LinkBarButton
					isActive
					onClick={action('You like clicking things')}
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
				</LinkBarButton>
				<LinkBarButton onClick={action('You like clicking things')}>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
				</LinkBarButton>
				<LinkBarButton onClick={action('You like clicking things')}>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
				</LinkBarButton>
			</HorizontalLinkBar>

			<hr />

			<HorizontalLinkBar background={colors.white}>
				<SmallLinkBarButton
					isActive
					useUnderline={false}
					activeBackground={colors.blueLight}
					onClick={action('You like clicking things')}
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
				</SmallLinkBarButton>
				<SmallLinkBarButton
					useUnderline={false}
					activeBackground={colors.blueLight}
					onClick={action('You like clicking things')}
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
				</SmallLinkBarButton>
				<SmallLinkBarButton
					useUnderline={false}
					activeBackground={colors.blueLight}
					onClick={action('You like clicking things')}
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
				</SmallLinkBarButton>
			</HorizontalLinkBar>
		</DemoContainer>

		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
import {
	HorizontalLinkBar,
	LinkBarButton,
	SmallLinkBarButton
} from '@aller/shiny';

<HorizontalLinkBar background={colors.white}>
	<LinkBarButton
		isActive
		onClick={action('You like clicking things')}
	>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
	</LinkBarButton>
	<LinkBarButton onClick={action('You like clicking things')}>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
	</LinkBarButton>
	<LinkBarButton onClick={action('You like clicking things')}>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
	</LinkBarButton>
</HorizontalLinkBar>

<hr />

<HorizontalLinkBar background={colors.white}>
	<SmallLinkBarButton
		isActive
		useUnderline={false}
		activeBackground={colors.blueLight}
		onClick={action('You like clicking things')}
	>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
	</SmallLinkBarButton>
	<SmallLinkBarButton
		useUnderline={false}
		activeBackground={colors.blueLight}
		onClick={action('You like clicking things')}
	>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
	</SmallLinkBarButton>
	<SmallLinkBarButton
		useUnderline={false}
		activeBackground={colors.blueLight}
		onClick={action('You like clicking things')}
	>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
	</SmallLinkBarButton>
</HorizontalLinkBar>
						`}
		</Code>
	</section>
);

export { ButtonStory };
