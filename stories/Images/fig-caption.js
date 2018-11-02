import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { FigCaption } from '../../src';

const FigCaptionStory = () => {
	return (
		<FigCaption><strong>GRAVSTED:</strong> Emmett Till ble bare 14 år.{' '}
		Lynsjingen av den afroamerikanske gutten står igjen som en av de mest{' '}
		brutale i USAs historie. Her fra gravstedet hans i Aslip i Illinois. Foto:{' '}
		AFP Photo / NTB Scanpix
		</FigCaption>
	);
};

export default withInfo()(FigCaptionStory);
