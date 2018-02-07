import React from 'react';

import { LinkBarLink       } from '../../src/atoms/LinkBarLink';
import { HorizontalLinkBar } from '../../src/molecules/HorizontalLinkBar';

const MatStory = () => (
	<section>
		<HorizontalLinkBar background={'white'}>
			<LinkBarLink
				useUnderline={false}
				activeBackground={'white'}
				linkText="Oppskrifter"
				activeTextColor={'primary'}
				url="#"
				textColor={'type'}
				isActive
			/>
			<LinkBarLink
				useUnderline={false}
				activeBackground={'white'}
				linkText="Train-For-Trinn-Video"
				url="#"
				textColor={'type'}
				activeTextColor={'primary'}
			/>
			<LinkBarLink
				useUnderline={false}
				activeBackground={'white'}
				linkText="Bli Inspirert"
				url="https://example.com"
				textColor={'type'}
				activeTextColor={'primary'}
			/>
			<LinkBarLink
				useUnderline={false}
				activeBackground={'white'}
				linkText="Populært Nå"
				url="https://example.com"
				textColor={'type'}
				activeTextColor={'primary'}
			/>
		</HorizontalLinkBar>
	</section>
);

export { MatStory };
