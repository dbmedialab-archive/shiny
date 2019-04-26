import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
	Rate,
} from '../../src';


const Story = () => {
	return (
		<section>
			<Rate value={2.5} onChange={action('click')} />
			<Rate direction="column-reverse" value={1.6} maxValue={9} onChange={action('click')} />
			<Rate
				direction="row-reverse"
				size={7}
				size-sm={4}
				icon="nut"
				value={1.5}
				maxValue={3}
				onChange={action('click')}
			/>
			<Rate direction="column" editable={false} icon="kk" value={2.5} maxValue={7} onChange={action('click')} />
		</section>
	);
};

export default withInfo({
	text: `
<p>
	Interactive Component Rate
</p>
	`,
})(Story);
