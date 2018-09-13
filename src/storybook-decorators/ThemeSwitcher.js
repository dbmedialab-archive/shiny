import React from 'react';
import { ThemeSwitcher } from '..';
import { Body } from '..';

const BodyMock = Body.withComponent('div');

const StorybookThemeSwitcher = stories => <ThemeSwitcher><BodyMock>{stories()}</BodyMock></ThemeSwitcher>;

export { StorybookThemeSwitcher };
