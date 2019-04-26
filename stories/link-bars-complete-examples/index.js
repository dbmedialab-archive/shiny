// Dependencies
import { storiesOf } from '@storybook/react';

// Stories
import { SeHerStory } from './SeHerStory';
import { SeHerMenuRemake } from './SeHerMenuRemake';
import { MatStory } from './MatStory';
import { KKStory } from './KKStory';
import { DagbladetStory } from './DagbladetStory';
import { Elbil24Story } from './Elbil24Story';
import { UserDropDownExample } from './UserDropDown';

export default () => {
	storiesOf('Link Bars|Complete Link Bar Examples', module)
		.add('Dagbladet-like bar', DagbladetStory)
		.add('KK', KKStory)
		.add('SeHer-like bar', SeHerStory)
		.add('SeHer menu remake', SeHerMenuRemake)
		.add('Elbil24-like bar', Elbil24Story)
		.add('user drop down', UserDropDownExample)
		.add('MatStory link bar', MatStory);
};
