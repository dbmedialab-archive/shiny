import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
	Voter,
} from '../../src';


const Story = () => {
	return (
		<section>
			<Voter onChange={action('click')} />
			<Voter direction="column-reverse" icon="nut" value={1} maxValue={3} onChange={action('click')} />
			<Voter editable={false} icon="kk" value={2} maxValue={7} onChange={action('click')} />
		</section>
	);
};

export default withInfo({
	text: `
<p>
	Interactive Component Voter
</p>
	`,
})(Story);
