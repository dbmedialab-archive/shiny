import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { LargeHeading } from '../../src';
import { Kicker } from '../../src';
import { Row, Col } from '../../src';
import { TrysilPlug } from '../../src';

const KickerBlock = () => (
	<section>
		<Kicker kickerMargin="0 0 1rem 0">Za otvagu i svobodu</Kicker>
		<Row>
			<TrysilPlug
				column={{ xs: 6, md: 12 }}
				Heading={LargeHeading}
				title="Alene på jobb etter sykdomsavsløringen"
				placeholderUrl="https://picsum.photos/640/480"
				url="https://example.com"
				image="https://picsum.photos/640/480"
				ratio={0.5}
				labelText="SYSTE NYTT"
				labelColor="venetianRed"
				imageLabel={[{ text: 'SYSTE NYTT', backgroundColor: 'venetianRed' }]}
				hoveringKicker="SYSTE NYTT"
			/>
			<TrysilPlug
				column={{ xs: 6, md: 12 }}
				Heading={LargeHeading}
				title="Alene på jobb etter sykdomsavsløringen"
				placeholderUrl="https://picsum.photos/640/480"
				url="https://example.com"
				image="https://picsum.photos/640/480"
				ratio={0.5}
				labelText="SYSTE NYTT"
				labelColor="venetianRed"
				imageLabel={[{ text: 'SYSTE NYTT', backgroundColor: 'venetianRed' }]}
			/>
		</Row>
	</section>
);

const ImageStory = () => {
	return (
		<React.Fragment>
			<Row>
				<Col xs={12} md={8}>
					<TrysilPlug
						Heading={LargeHeading}
						iconName="play"
						iconSize={6}
						title="Alene på jobb etter sykdomsavsløringen"
						subtitle="Kronprins Haakon takker for støtten på sitt første oppdrag etter sykdomsavsløringen."
						placeholderUrl="https://picsum.photos/640/480"
						url="https://example.com"
						image="https://picsum.photos/640/480"
						ratio={0.5}
						imageLabel={[{ text: 'SYSTE NYTT', backgroundColor: 'venetianRed', fontSize: '1.8rem' }]}
						hoveringKicker="SYSTE NYTT"
					/>
				</Col>
				<Col xs={12} md={4}>
					<KickerBlock />
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default withInfo()(ImageStory);
