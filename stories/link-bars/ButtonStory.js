import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars
import { DemoContainer } from '../storybook-components';

import { Heading, HugeHeading } from '../../src/atoms/Heading';
import { Code } from '../../src/atoms/Code';

// HorizontalLinkBar
import {
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
					onClick={(e) => { alert('You like clicking things'); }} // eslint-disable-line no-alert
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
				</LinkBarButton>
				<LinkBarButton>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
				</LinkBarButton>
				<LinkBarButton>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
				</LinkBarButton>
			</HorizontalLinkBar>

			<hr />

			<HorizontalLinkBar background={colors.white}>
				<SmallLinkBarButton
					isActive
					useUnderline={false}
					activeBackground={colors.blueLight}
					onClick={(e) => { alert('You like clicking things'); }} // eslint-disable-line no-alert
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
				</SmallLinkBarButton>
				<SmallLinkBarButton useUnderline={false} activeBackground={colors.blueLight}>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
				</SmallLinkBarButton>
				<SmallLinkBarButton useUnderline={false} activeBackground={colors.blueLight}>
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
	<LinkBarButton isActive onClick={(e) => { alert('You like clicking things'); }}>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
	</LinkBarButton>
	<LinkBarButton>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
	</LinkBarButton>
	<LinkBarButton>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
	</LinkBarButton>
</HorizontalLinkBar>

<hr />

<HorizontalLinkBar background={colors.white}>
	<SmallLinkBarButton
		isActive
		useUnderline={false}
		activeBackground={colors.blueLight}
		onClick={(e) => { alert('You like clicking things'); }}
	>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
	</SmallLinkBarButton>
	<SmallLinkBarButton useUnderline={false} activeBackground={colors.blueLight}>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
	</SmallLinkBarButton>
	<SmallLinkBarButton useUnderline={false} activeBackground={colors.blueLight}>
		<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
	</SmallLinkBarButton>
</HorizontalLinkBar>
						`}
		</Code>
	</section>
);

export { ButtonStory };
