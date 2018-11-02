import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { Figure, FigCaption, Image } from '../../src';

const FigureStory = () => {
	return (
		<Figure>
			<Image src="https://picsum.photos/640/480" />
			<FigCaption><strong>GRAVSTED:</strong> Emmett Till ble bare 14 år.{' '}
			Lynsjingen av den afroamerikanske gutten står igjen som en av de mest{' '}
			brutale i USAs historie. Her fra gravstedet hans i Aslip i Illinois. Foto:{' '}
			AFP Photo / NTB Scanpix
			</FigCaption>
		</Figure>
	);
};

export default withInfo('A Figure with an Image and a FigCaption.')(FigureStory);
