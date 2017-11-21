import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies,no-unused-vars
import { StoryBox, StoryTitle, StorySubtitle, DemoContainer } from './storybook-components';
import SiteSelection from './SiteSelection';

// HorizontalLinkBar
import HorizontalLinkBar from '../src/molecules/HorizontalLinkBar/HorizontalLinkBar';
import FullWidthLinkBar from '../src/molecules/HorizontalLinkBar/FullWidthLinkBar';
import LinkBarLink from '../src/molecules/HorizontalLinkBar/LinkBarLink';
import LinkBarButton, { SmallLinkBarButton } from '../src/molecules/HorizontalLinkBar/LinkBarButton';
// import TagBar from '../shared-components/TagBar/TagBar';
import theme from '../src/themes/default-theme';

const { colors } = theme;

export default () => {
	storiesOf('Horizontal bars', HorizontalLinkBar)
		.addDecorator(stories => (
			<StoryBox>
				<SiteSelection>
					{stories()}
				</SiteSelection>
			</StoryBox>
		))
		.add('HorizontalLinkBar', () => {
			return (
				<section>
					<StoryTitle>HorizontalLinkBar</StoryTitle>
					<p>A horizontal navbar that can contain items such as links, buttons, dropdowns or other stuff.</p>

					<StorySubtitle>Demo</StorySubtitle>
					<DemoContainer>
						<HorizontalLinkBar background={colors.white}>
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
							<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
						</HorizontalLinkBar>
					</DemoContainer>


					<StorySubtitle>Usage</StorySubtitle>
					<pre>
						<code>
							{`
<HorizontalLinkBar background={colors.white}>
<LinkBarLink linkText="One" url="https://example.com" isActive />
<LinkBarLink linkText="Two" url="https://example.com" />
<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</HorizontalLinkBar>
								`}
						</code>
					</pre>
				</section>
			);
		})
		.add('FullWidthLinkBar', () => {
			return (
				<section>
					<StoryTitle>FullWidthLinkBar</StoryTitle>
					<p>A FullWidthLinkBar is a HorizontalLinkBar that uses 100% of the available space.</p>
					<p>
						By default, it is positioned absolutely. If you add a truthy <code>fixed</code> prop, it is
						positioned fixed instead.
					</p>

					<StorySubtitle>Demo</StorySubtitle>
					<DemoContainer>
						<FullWidthLinkBar background={colors.white}>
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
							<LinkBarLink linkText="Full Width for You" url="https://example.com" />
						</FullWidthLinkBar>
					</DemoContainer>


					<StorySubtitle>Usage</StorySubtitle>
					<pre>
						<code>
							{`
<FullWidthLinkBar background={colors.white}>
<LinkBarLink linkText="One" url="https://example.com" isActive />
<LinkBarLink linkText="Two" url="https://example.com" />
<LinkBarLink linkText="Full Width for You" url="https://example.com" />
</FullWidthLinkBar>
							`}
						</code>
					</pre>
				</section>
			);
		})
		.add('LinkBarLink', () => {
			return (
				<section>
					<StoryTitle>LinkBarLink</StoryTitle>
					<p>Provides links (<code>&lt;a&gt;</code> tags) for HorizontalLinkBar.</p>
					<p>You can remove the underline and change the active background with props.</p>

					<StorySubtitle>Demo</StorySubtitle>
					<DemoContainer>
						<HorizontalLinkBar background={colors.white}>
							<LinkBarLink linkText="One" url="https://example.com" isActive />
							<LinkBarLink linkText="Two" url="https://example.com" />
							<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
						</HorizontalLinkBar>
					</DemoContainer>

					<StorySubtitle>Usage</StorySubtitle>
					<pre>
						<code>
							{`
<HorizontalLinkBar background={colors.white}>
<LinkBarLink linkText="One" url="https://example.com" isActive />
<LinkBarLink linkText="Two" url="https://example.com" />
<LinkBarLink linkText="Buckle My Shoe" url="https://example.com" />
</HorizontalLinkBar>
							`}
						</code>
					</pre>

					<StorySubtitle>Alternative state indication</StorySubtitle>
					<p>You can remove the underline and change the active background with props.</p>

					<StorySubtitle>Demo</StorySubtitle>
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

					<StorySubtitle>Usage</StorySubtitle>
					<pre>
						<code>
							{`
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
>
<LinkBarLink
	useUnderline={false}
	activeBackground={colors.pinkLight}
	linkText="Buckle My Shoe"
	url="https://example.com"
	>
</HorizontalLinkBar>
							`}
						</code>
					</pre>
				</section>
			);
		})
		.add('LinkBarButton', () => {
			return (
				<section>
					<StoryTitle>LinkBarButton</StoryTitle>
					<p>
						Provides buttons (<code>&lt;button&gt;</code> tags) that can contain a child (e.g. img) for
						HorizontalLinkBar.
					</p>
					<p>
						Similar to LinkBarLink, but allows using <code>onClick</code> instead of
						<code>href=&quot;&quot;</code>.
					</p>
					<p>Comes in two sizes, regular and small.</p>

					<StorySubtitle>Demo</StorySubtitle>
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

					<StorySubtitle>Usage</StorySubtitle>
					<pre>
						<code>
							{`
import HorizontalLinkBar from '../shared-components/HorizontalLinkBar/HorizontalLinkBar';
import LinkBarButton, { SmallLinkBarButton } from '../shared-components/HorizontalLinkBar/LinkBarButton';

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
						</code>
					</pre>
				</section>
			);
		});

	/*
    .add('TagBar', () => (
      <section>
        <StoryTitle>TagBar</StoryTitle>
        <p>Bar that display tags</p>

        <StorySubtitle>Demo</StorySubtitle>
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

        <StorySubtitle>Usage</StorySubtitle>
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
