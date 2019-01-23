import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { DemoContainer } from '../storybook-components';

import {
	HorizontalLinkBar,
	LinkBarButton,
	SmallLinkBarButton,
	LargeLinkBarButton,
} from '../../src';

const ButtonStory = () => (
	<section>
		<DemoContainer>
			<HorizontalLinkBar backgroundColor="white">
				<SmallLinkBarButton
					isActive
					useUnderline={false}
					activeBackgroundColor="blueLight"
					onClick={action('You like clicking things')}
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
				</SmallLinkBarButton>
				<SmallLinkBarButton
					useUnderline={false}
					activeBackgroundColor="blueLight"
					onClick={action('You like clicking things')}
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
				</SmallLinkBarButton>
				<SmallLinkBarButton
					useUnderline={false}
					activeBackgroundColor="blueLight"
					onClick={action('You like clicking things')}
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
				</SmallLinkBarButton>
			</HorizontalLinkBar>

			<hr />

			<HorizontalLinkBar backgroundColor="white">
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

			<HorizontalLinkBar backgroundColor="white">
				<LargeLinkBarButton
					isActive
					onClick={action('You like clicking things')}
				>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo1" />
				</LargeLinkBarButton>
				<LargeLinkBarButton onClick={action('You like clicking things')}>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo2" />
				</LargeLinkBarButton>
				<LargeLinkBarButton onClick={action('You like clicking things')}>
					<img src="https://sol.no/s/img/w_30/static/sol.png" alt="" title="demo3" />
				</LargeLinkBarButton>
			</HorizontalLinkBar>
		</DemoContainer>
	</section>
);

export default withInfo({
	text: `
<Paragraph>
	Provides buttons (<code>&lt;button&gt;</code> tags) that can contain a child (e.g. img) for
	HorizontalLinkBar.
</Paragraph>
<Paragraph>
	Similar to LinkBarLink, but allows using <code>onClick</code> instead of
	<code>href=&quot;&quot;</code>.
</Paragraph>
<Paragraph>Comes in two sizes, regular and small.</Paragraph>
	`,
})(ButtonStory);
