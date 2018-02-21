import React from 'react';

import { Code } from '../../src/atoms/Code';
import {
	FrontSmallHeading,
	FrontMediumHeading,
	FrontLargeHeading,
	FrontXLargeHeading,
	FrontHugeHeading,
} from '../../src/atoms/FrontHeading';

export default () => (
	<section>
		<FrontSmallHeading>This is a small front line heading</FrontSmallHeading>
		<FrontMediumHeading>This is a medium front line heading</FrontMediumHeading>
		<FrontLargeHeading>This is a large front line heading</FrontLargeHeading>
		<FrontXLargeHeading>This is a Xlarge front line heading</FrontXLargeHeading>
		<FrontHugeHeading>This is a huge front line heading</FrontHugeHeading>

		<Code language="jsx">
			{`
				import {
					FrontSmallHeading,
					FrontMediumHeading,
					FrontLargeHeading,
					FrontXLargeHeading,
					FrontHugeHeading
				} from '@aller/shiny';
				${{ /* eslint-disable max-len */ }}
				<FrontSmallHeading textColor="type" lineColor="primary">This is a small front line heading</FrontSmallHeading>
				${{ /* eslint-enable max-len */ }}
				<FrontMediumHeading>This is a medium front line heading</FrontMediumHeading>
				<FrontLargeHeading>This is a large front line heading</FrontLargeHeading>
				<FrontXLargeHeading>This is a Xlarge front line heading</FrontXLargeHeading>
				<FrontHugeHeading>This is a huge front line heading</FrontHugeHeading>
			`}
		</Code>
	</section>
);
