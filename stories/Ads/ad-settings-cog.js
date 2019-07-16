/* eslint-disable max-len */
import React from 'react';
import { withInfo } from '@storybook/addon-info';

import {
	AdSettingsCog,
	GenericAd,
	BodyText,
} from '../../src';

const AdSettingsCogStory = () => (
	<>
		<section style={{ position: 'relative' }}>
			<AdSettingsCog />
			<BodyText>Hi, this text is in a content block that also has an ad cog in it.</BodyText>

			<BodyText>Here is another paragraph.</BodyText>
		</section>
		<section>
			<GenericAd
				width={'320px'}
				height={'250px'}
			>
				<AdSettingsCog />
				<img src="https://via.placeholder.com/320x250" alt="placeholder" />
			</GenericAd>
		</section>
	</>
);

export default withInfo({
	text: `
<p>AdSettingsCog is an absolutely positioned thing with a cog in it.</p>

<p>This is meant for adding information about ads onto the ads themselves, in
	accordance with advertisement practices in Norway.
</p>
        `,
})(AdSettingsCogStory);
