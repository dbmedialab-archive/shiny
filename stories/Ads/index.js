import { storiesOf } from '@storybook/react';

import adSettingsCogStory from './ad-settings-cog';
import genericAdStory from './generic-ad';
import stickyAdStory from './sticky-right';
import fullscreenAdStory from './fullscreen-ad';
import wallpaperStory from './wallpaper';

export default () => {
	storiesOf('Ads|Ads', module)
		.add('AdSettingsCog', adSettingsCogStory)
		.add('Generic Ad', genericAdStory)
		.add('Sticky Ad', stickyAdStory)
		.add('Fullscreen Ad', fullscreenAdStory)
		.add('Wallpaper Ad', wallpaperStory);
};
