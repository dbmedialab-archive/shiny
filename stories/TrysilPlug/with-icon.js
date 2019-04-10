/* eslint-disable max-len */
import React from 'react';
import { withInfo } from '@storybook/addon-info';

import { TrysilPlug } from '../../src/molecules/TrysilPlug';

const TrysilPlugWithIconStory = () => (
	<TrysilPlug
		title="Hva skal vi plugge i dag, da?"
		subtitle="Det blir vel en nyhetsartikkel igjen, tenker jeg."
		placeholderUrl="https://2.dbstatic.no/69782034.jpg?imageId=69782034&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=98&height=49&compression=30"
		url="https://example.com"
		image="https://2.dbstatic.no/69782034.jpg?imageId=69782034&x=4.7222222222222&y=28.976572133169&cropw=90.740740740741&croph=60.419235511714&width=980&height=490&compression=70"
		ratio={0.5}
		preventBlur
		iconUrl="https://via.placeholder.com/100x100"
		iconWidth={10}
	/>
);

export default withInfo('TrysilPlug with icon')(TrysilPlugWithIconStory);
