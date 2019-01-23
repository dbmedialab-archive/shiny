import React, { Fragment } from 'react';
import { withInfo } from '@storybook/addon-info';

import {
	LargeHeading,
	LogiclessModal,
	BodyText,
	Button,
} from '../../src';

const Title = () => (
	<Fragment>
		Dagbladet er en del av <b>Aller Media</b>
	</Fragment>
);

const closeModal = () => console.log('Closing!'); // eslint-disable-line no-console

const LogiclessModalStory = () => (
	<LogiclessModal isOpen title={<Title />} closeModal={closeModal} appElement="#root">
		<LargeHeading>Hvorfor ser du denne annonsen</LargeHeading>
		<BodyText>
			Nettstedet du nå besøker blir i stor del finansiert av annonseinntekter.
			Basert på din tidligere aktivitet hos oss, vil du få annonser vi tror kan interessere deg.
		</BodyText>
		<BodyText>Du velger selv om du ønsker å endre dine innstillinger</BodyText>
		<Button outline background="buttonColor">
			<a href="https://personvern.aller.no/annonseinnstillinger.html" rel="noopener noreferrer" target="_blank">
				Administrer dine innstillinger
			</a>
		</Button>
		<LargeHeading>Om Aller Media og annonsering</LargeHeading>
		<BodyText>Aller Media eier nettstedene Dagbladet, Sol, DinSide, KK, Se og Hør, Lommelegen, Topp og Vi</BodyText>
		<Button outline background="buttonColor">
			<a href="https://personvern.aller.no/relevantinnhold.html" rel="noopener noreferrer" target="_blank">
				Les mer om Aller Media og annonser
			</a>
		</Button>
	</LogiclessModal>
);

export default withInfo('Modal without logic, which means it needs isOpen state from somewhere.')(LogiclessModalStory);
