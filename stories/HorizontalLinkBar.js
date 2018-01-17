import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars
import { DemoContainer } from './storybook-components';

import { Heading, HugeHeading } from '../src/atoms/Heading';
import { Code } from '../src/atoms/Code';

// HorizontalLinkBar
import { HorizontalLinkBar } from '../src/molecules/HorizontalLinkBar/HorizontalLinkBar';
import { FullWidthLinkBar } from '../src/molecules/HorizontalLinkBar/FullWidthLinkBar';
import { LinkBarLink } from '../src/molecules/HorizontalLinkBar/LinkBarLink';
import { LinkBarButton, SmallLinkBarButton } from '../src/molecules/HorizontalLinkBar/LinkBarButton';
// import TagBar from '../shared-components/TagBar/TagBar';
import theme from '../src/themes/default-theme';

const { colors } = theme;

export default () => {
	storiesOf('Horizontal bars', HorizontalLinkBar)
		.add('HorizontalLinkBar', () => {
			return (
				<section>
					<HugeHeading>HorizontalLinkBar</HugeHeading>
					<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>

					<Heading>Demo</Heading>
					<DemoContainer>
						<HorizontalLinkBar background={colors.white}>
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
							<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
						</HorizontalLinkBar>
					</DemoContainer>

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<HorizontalLinkBar background={colors.white}>
  <LinkBarLink linkText="One" url="https://example.com" isActive />
  <LinkBarLink linkText="Two" url="https://example.com" />
  <LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</HorizontalLinkBar>
						`}
					</Code>
				</section>
			);
		})
		.add('... with arrows for scrolling', () => {
			return (
				<section>
					<HugeHeading>HorizontalLinkBar with arrows for scrolling</HugeHeading>
					<p>shouldUseScrollArrows will add clickable arrows if scrolling is needed.</p>

					<Heading>Demo</Heading>
					<DemoContainer>
						<HorizontalLinkBar
							background={colors.white}
							shouldUseScrollArrows
						>
							<LinkBarLink linkText="One" url="https://example.com" />
							<LinkBarLink linkText="Two" url="https://example.com" isActive />
							<LinkBarLink linkText="Tree" url="https://example.com" />
							<LinkBarLink linkText="Four" url="https://example.com" />
							<LinkBarLink linkText="Five" url="https://example.com" />
							<LinkBarLink linkText="Six" url="https://example.com" />
							<LinkBarLink linkText="Seven" url="https://example.com" />
							<LinkBarLink linkText="Eight" url="https://example.com" />
							<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
						</HorizontalLinkBar>
					</DemoContainer>

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<HorizontalLinkBar
	background={colors.white}
	shouldUseScrollArrows
>
  <LinkBarLink linkText="One" url="https://example.com" />
  <LinkBarLink linkText="Two" url="https://example.com" isActive />
  <LinkBarLink linkText="Tree" url="https://example.com" />
  <LinkBarLink linkText="Four" url="https://example.com" />
  <LinkBarLink linkText="Five" url="https://example.com" />
  <LinkBarLink linkText="Six" url="https://example.com" />
  <LinkBarLink linkText="Seven" url="https://example.com" />
  <LinkBarLink linkText="Eight" url="https://example.com" />
  <LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</HorizontalLinkBar>
						`}
					</Code>
				</section>
			);
		})
		.add('... with nested padding', () => (
			<section>
				<HugeHeading>HorizontalLinkBar with adjustment for nested padding</HugeHeading>
				<p>The shouldAdjustForNestedPadding prop will add a negative margin to the left and right. This can make it
					easier to put a menu line inside a grid.
				</p>
				<DemoContainer>
					<HorizontalLinkBar shouldAdjustForNestedPadding>
						<LinkBarLink
							key={1}
							linkText="Adjusted"
							url="#adjusted"
						/>
						<LinkBarLink
							key={2}
							linkText="for"
							url="#for"
						/>
						<LinkBarLink
							key={3}
							isActive
							linkText="nested"
							url="#nested"
						/>
						<LinkBarLink
							key={4}
							linkText="padding"
							url="#padding"
						/>
					</HorizontalLinkBar>
				</DemoContainer>
				<DemoContainer>
					<HorizontalLinkBar>
						<LinkBarLink
							key={1}
							linkText="Not"
							url="#not"
						/>
						<LinkBarLink
							key={2}
							linkText="adjusted"
							url="#adjusted"
						/>
						<LinkBarLink
							key={3}
							linkText="for"
							url="#for"
						/>
						<LinkBarLink
							key={4}
							isActive
							linkText="nested"
							url="#nested"
						/>
						<LinkBarLink
							key={1}
							linkText="padding"
							url="#padding"
						/>
					</HorizontalLinkBar>
				</DemoContainer>
				<Code language="jsx">
					{`
<HorizontalLinkBar
	shouldAdjustForNestedPadding
>
	<LinkBarLink
		key={1}
		linkText="Adjusted"
		url="#adjusted"
	/>
	<LinkBarLink
		key={2}
		linkText="for"
		url="#for"
	/>
</HorizontalLinkBar>
					`}
				</Code>
			</section>
		))
		.add('... with gradient background', () => (
			<section>
				<HugeHeading>HorizontalLinkBar with gradient background</HugeHeading>

				<DemoContainer>
					<HorizontalLinkBar
						background={`linear-gradient(0deg, ${colors[colors.skinColors.splashBackground]}, ${colors.white})`}
					>
						<LinkBarLink
							key={1}
							linkText="Oh yeah"
							url="#yeah"
						/>
						<LinkBarLink
							key={2}
							isActive
							linkText="It's a gradient"
							url="#gradient"
						/>
					</HorizontalLinkBar>
				</DemoContainer>
				<DemoContainer>
					<HorizontalLinkBar
						background={`linear-gradient(0deg, ${colors.grayTint}, ${colors.white} .1rem)`}
					>
						<LinkBarLink
							key={1}
							linkText="A"
							url="#a"
						/>
						<LinkBarLink
							key={2}
							linkText=".1rem"
							url="#.1rem"
						/>
						<LinkBarLink
							key={3}
							linkText="gradient"
							url="#gradient"
						/>
						<LinkBarLink
							key={4}
							isActive
							linkText="simulates"
							url="#simulates"
						/>
						<LinkBarLink
							key={5}
							linkText="a border"
							url="#border"
						/>
					</HorizontalLinkBar>
				</DemoContainer>
				<Code language="jsx">
					{`
<HorizontalLinkBar
	background={\`linear-gradient(
		0deg,
		\${colors[colors.skinColors.splashBackground]},
		${colors.white} .1rem
	)\`}
>
	<LinkBarLink
		key={1}
		linkText="Oh yeah"
		url="#yeah"
	/>
	<LinkBarLink
		key={2}
		isActive
		linkText="It's a gradient"
		url="#gradient"
	/>
</HorizontalLinkBar>
					`}
				</Code>
			</section>
		))
		.add('... without padding', () => (
			<section>
				<HugeHeading>HorizontalLinkBar without padding</HugeHeading>
				<Heading>Remove the padding</Heading>
				<p>Use the <code>shouldHavePadding</code> prop to remove the left and right padding in the link bar.</p>
				<DemoContainer>
					<HorizontalLinkBar shouldHavePadding={false}>
						<LinkBarLink linkText="Siste nytt" />
						<LinkBarLink linkText="Lokale nyheter" />
						<LinkBarLink linkText="Sport" />
					</HorizontalLinkBar>
				</DemoContainer>
				<Code language="jsx">
					{`
<HorizontalLinkBar shouldHavePadding={false}>
	<LinkBarLink linkText="Siste nytt" />
	<LinkBarLink isActive linkText="Lokale nyheter" />
	<LinkBarLink linkText="Sport" />
</HorizontalLinkBar>
					`}
				</Code>

				<Heading>.3rem ad adjustment</Heading>
				<p>In addition, we have by default added a .3rem padding adjustment to help our grid align with common ad
					formats. You can remove this extra padding by setting the <code>isTopLevelComponent</code> prop
					to <code>false</code>.
				</p>
				<DemoContainer>
					<HorizontalLinkBar
						shouldHavePadding={false}
						isTopLevelComponent={false}
					>
						<LinkBarLink linkText="Siste nytt" />
						<LinkBarLink isActive linkText="Lokale nyheter" />
						<LinkBarLink linkText="Sport" />
					</HorizontalLinkBar>
				</DemoContainer>
				<DemoContainer>
					<HorizontalLinkBar
						shouldHavePadding={false}
						isTopLevelComponent={false}
					>
						<LinkBarLink linkText="Siste nytt" />
						<LinkBarLink isActive linkText="Lokale nyheter" />
						<LinkBarLink linkText="Sport" />
					</HorizontalLinkBar>
				</DemoContainer>
				<Code language="jsx">
					{`
<HorizontalLinkBar shouldHavePadding={false} isTopLevelComponent={false}>
	<LinkBarLink linkText="Siste nytt" />
	<LinkBarLink isActive linkText="Lokale nyheter" />
	<LinkBarLink linkText="Sport" />
</HorizontalLinkBar>
					`}
				</Code>

				<Heading>Without props</Heading>
				<p>This section is here just to help you compare the effects of the props.</p>
				<DemoContainer>
					<HorizontalLinkBar >
						<LinkBarLink linkText="Siste nytt" />
						<LinkBarLink isActive linkText="Lokale nyheter" />
						<LinkBarLink linkText="Sport" />
					</HorizontalLinkBar>
				</DemoContainer>
				<Code language="jsx">
					{`
<HorizontalLinkBar shouldHavePadding={false} isTopLevelComponent={false}>
	<LinkBarLink linkText="Siste nytt" />
	<LinkBarLink isActive linkText="Lokale nyheter" />
	<LinkBarLink linkText="Sport" />
</HorizontalLinkBar>
					`}
				</Code>
			</section>
		))
		.add('FullWidthLinkBar', () => {
			return (
				<section>
					<HugeHeading>FullWidthLinkBar</HugeHeading>
					<p>A FullWidthLinkBar is a HorizontalLinkBar that uses 100% of the available space.</p>
					<p>
						By default, it is positioned absolutely. If you add a truthy <code>fixed</code> prop, it is
						positioned fixed instead.
					</p>

					<Heading>Demo</Heading>
					<DemoContainer>
						<FullWidthLinkBar background={colors.white}>
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink isActive linkText="Two" url="https://example.com" />
							<LinkBarLink linkText="Full Width for You" url="https://example.com" />
						</FullWidthLinkBar>
					</DemoContainer>


					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<FullWidthLinkBar background={colors.white}>
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Full Width for You" url="https://example.com" />
</FullWidthLinkBar>
						`}
					</Code>
				</section>
			);
		})
		.add('LinkBarLink', () => {
			return (
				<section>
					<HugeHeading>LinkBarLink</HugeHeading>
					<p>Provides links (<code>&lt;a&gt;</code> tags) for HorizontalLinkBar.</p>
					<p>You can remove the underline and change the active background with props.</p>

					<Heading>Demo</Heading>
					<DemoContainer>
						<HorizontalLinkBar background={colors.white}>
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
							<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
						</HorizontalLinkBar>
					</DemoContainer>

					<Heading>Usage</Heading>
					<Code language="jsx">
						{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<HorizontalLinkBar background={colors.white}>
	<LinkBarLink linkText="One" url="https://example.com" isActive />
	<LinkBarLink linkText="Two" url="https://example.com" />
	<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</HorizontalLinkBar>
						`}
					</Code>
				</section>
			);
		})
		.add('... with skinned bottom border', () => (
			<section>
				<HugeHeading>LinkBarLink</HugeHeading>

				<Heading>Demo</Heading>
				<p>If the <code>linkText</code> prop corresponds with a property that exists in your theme
					under <code>colors.skinColors</code>, then that color will be used for the default state indicating bottom
					border. Hover inactive items for an animated effect.
				</p>
				<DemoContainer>
					<HorizontalLinkBar background={colors.white}>
						<LinkBarLink linkText="Sport" url="https://example.com" />
						<LinkBarLink linkText="Underholdning" url="https://example.com" />
						<LinkBarLink linkText="Non-corresponding linkText defaults to primary color" url="https://example.com" />
						<LinkBarLink isActive linkText="Sport" url="https://example.com" />
						<LinkBarLink isActive linkText="Underholdning" url="https://example.com" />
						<LinkBarLink isActive linkText="Primary" url="https://example.com" />
					</HorizontalLinkBar>
				</DemoContainer>

				<Heading>Usage</Heading>
				<Code language="jsx">
					{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<HorizontalLinkBar background={colors.white}>
	<LinkBarLink linkText="Sport" url="https://example.com" />
	<LinkBarLink linkText="Underholdning" url="https://example.com" />
	<LinkBarLink linkText="Non-corresponding linkText defaults to primary color" url="https://example.com" />
	<LinkBarLink isActive linkText="Sport" url="https://example.com" />
	<LinkBarLink isActive linkText="Underholdning" url="https://example.com" />
	<LinkBarLink isActive linkText="Primary" url="https://example.com" />
</HorizontalLinkBar>
						`}
				</Code>
			</section>
		))
		.add('... with alt. state indication', () => (
			<section>
				<HugeHeading>LinkBarLink with alternative state indication</HugeHeading>
				<p>You can remove the underline and change the active background with props.</p>

				<Heading>Demo</Heading>
				<DemoContainer>
					<HorizontalLinkBar background={colors.white}>
						<LinkBarLink
							useUnderline={false}
							activeBackground={colors.pinkLight}
							linkText="One"
							url="https://example.com"
							isActive
						/>
						<LinkBarLink
							useUnderline={false}
							activeBackground={colors.pinkLight}
							linkText="Two"
							url="https://example.com"
						/>
						<LinkBarLink
							useUnderline={false}
							activeBackground={colors.pinkLight}
							linkText="Buckle My Shoe"
							url="https://example.com"
						/>
					</HorizontalLinkBar>
				</DemoContainer>

				<Heading>Usage</Heading>
				<Code language="jsx">
					{`
import {
	HorizontalLinkBar,
	LinkBarLink,
} from '@aller/shiny';

<HorizontalLinkBar background={colors.white}>
	<LinkBarLink
	useUnderline={false}
	activeBackground={colors.pinkLight}
	linkText="One"
	url="https://example.com"
	isActive
/>
	<LinkBarLink
		useUnderline={false}
		activeBackground={colors.pinkLight}
		linkText="Two"
		url="https://example.com"
	/>
	<LinkBarLink
		useUnderline={false}
		activeBackground={colors.pinkLight}
		linkText="Buckle My Shoe"
		url="https://example.com"
	/>
</HorizontalLinkBar>
					`}
				</Code>
			</section>
		))
		.add('LinkBarButton', () => {
			return (
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
		});

	/*
    .add('TagBar', () => (
      <section>
        <HugeHeading>TagBar</HugeHeading>
        <p>Bar that display tags</p>

        <Heading>Demo</Heading>
        <TagBar
          tags={[
            {
              text: 'Donald Trump',
              link: '#',
            },
            {
              text: 'Petter Northug',
              link: '#',
            },
            {
              text: 'Presidentvalget',
              link: '#',
            },
          ]}
        />

        <Heading>Usage</Heading>
        <pre><code>
          {`
            <TagBar
              tags={[
                {
                  text: 'Donald Trump',
                  link: '#',
                },
                {
                  text: 'Petter Northug',
                  link: '#',
                },
                {
                  text: 'Presidentvalget',
                  link: '#',
                },
              ]}
            />
          `}
        </code></pre>
      </section>
    ))
    */
};
