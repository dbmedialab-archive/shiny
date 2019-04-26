import React from 'react';

import { DemoContainer } from '../storybook-components';

import { Code } from '../../src/atoms/Code';

import {
	Paragraph,
	Truncate,
	Heading,
	Row,
	HugeHeading,
} from '../../src';
/* eslint-disable react/no-unescaped-entities */
export default () => (
	<section>
		<HugeHeading>Truncate</HugeHeading>
		<Paragraph>Simple component for Truncating text</Paragraph>
		<Paragraph>Max-width based on theme variable "horizontalBase"</Paragraph>
		<Heading>Demo</Heading>
		<DemoContainer>
			<Row between="xs">
				<Truncate
					maxWidth="15rem"
					custom={[
						{ screenWidth: '128rem', maxWidth: '10rem' },
						{ screenWidth: '72.8rem', maxWidth: '6rem' },
						{ screenWidth: '44rem', maxWidth: '4rem' },
					]}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam in quam nec enim congue convallis eu nec odio.
					Integer faucibus id neque nec suscipit.
					Duis aliquam leo sed lacus condimentum lacinia.
					Maecenas mattis, enim vel placerat dapibus,
					nulla turpis venenatis mauris, sit amet auctor erat urna id quam.
					Morbi sapien odio, commodo in sagittis et, pellentesque a erat.
					Aenean ullamcorper orci at arcu rutrum auctor.
					Nam accumsan lacus id eleifend pulvinar. Duis sed auctor mi.
					Suspendisse iaculis congue ex, ut mattis augue pellentesque in.
					Nam fringilla vitae sapien et euismod.
					Donec viverra consectetur justo et luctus.
				</Truncate>
				<Truncate
					maxWidth="10rem"
					custom={[
						{ screenWidth: '72.8rem', maxWidth: '6rem' },
						{ screenWidth: '44rem', maxWidth: '4rem' },
					]}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam in quam nec enim congue convallis eu nec odio.
					Integer faucibus id neque nec suscipit.
					Duis aliquam leo sed lacus condimentum lacinia.
					Maecenas mattis, enim vel placerat dapibus,
					nulla turpis venenatis mauris, sit amet auctor erat urna id quam.
					Morbi sapien odio, commodo in sagittis et, pellentesque a erat.
					Aenean ullamcorper orci at arcu rutrum auctor.
					Nam accumsan lacus id eleifend pulvinar. Duis sed auctor mi.
					Suspendisse iaculis congue ex, ut mattis augue pellentesque in.
					Nam fringilla vitae sapien et euismod.
					Donec viverra consectetur justo et luctus.
				</Truncate>
				<Truncate maxWidth="25rem">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam in quam nec enim congue convallis eu nec odio.
					Integer faucibus id neque nec suscipit.
					Duis aliquam leo sed lacus condimentum lacinia.
					Maecenas mattis, enim vel placerat dapibus,
					nulla turpis venenatis mauris, sit amet auctor erat urna id quam.
					Morbi sapien odio, commodo in sagittis et, pellentesque a erat.
					Aenean ullamcorper orci at arcu rutrum auctor.
					Nam accumsan lacus id eleifend pulvinar. Duis sed auctor mi.
					Suspendisse iaculis congue ex, ut mattis augue pellentesque in.
					Nam fringilla vitae sapien et euismod.
					Donec viverra consectetur justo et luctus.
				</Truncate>
				<Truncate>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam in quam nec enim congue convallis eu nec odio.
					Integer faucibus id neque nec suscipit.
					Duis aliquam leo sed lacus condimentum lacinia.
					Maecenas mattis, enim vel placerat dapibus,
					nulla turpis venenatis mauris, sit amet auctor erat urna id quam.
					Morbi sapien odio, commodo in sagittis et, pellentesque a erat.
					Aenean ullamcorper orci at arcu rutrum auctor.
					Nam accumsan lacus id eleifend pulvinar. Duis sed auctor mi.
					Suspendisse iaculis congue ex, ut mattis augue pellentesque in.
					Nam fringilla vitae sapien et euismod.
					Donec viverra consectetur justo et luctus.
				</Truncate>
			</Row>
		</DemoContainer>
		<Heading>Usage</Heading>
		<Code language="jsx">
			{`
			import {
				Row,
				Truncate
			} from '@aller/shiny';
			<Row between="xs">
				<Truncate
					maxWidth="15rem"
					custom={[
						{ screenWidth: '128rem', maxWidth: '10rem' },
						{ screenWidth: '72.8rem', maxWidth: '6rem' },
						{ screenWidth: '44rem', maxWidth: '4rem' },
					]}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam in quam nec enim congue convallis eu nec odio.
					Integer faucibus id neque nec suscipit.
					Duis aliquam leo sed lacus condimentum lacinia.
					Maecenas mattis, enim vel placerat dapibus,
					nulla turpis venenatis mauris, sit amet auctor erat urna id quam.
					Morbi sapien odio, commodo in sagittis et, pellentesque a erat.
					Aenean ullamcorper orci at arcu rutrum auctor.
					Nam accumsan lacus id eleifend pulvinar. Duis sed auctor mi.
					Suspendisse iaculis congue ex, ut mattis augue pellentesque in.
					Nam fringilla vitae sapien et euismod.
					Donec viverra consectetur justo et luctus.
				</Truncate>
				<Truncate>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam in quam nec enim congue convallis eu nec odio.
					Integer faucibus id neque nec suscipit.
					Duis aliquam leo sed lacus condimentum lacinia.
					Maecenas mattis, enim vel placerat dapibus,
					nulla turpis venenatis mauris, sit amet auctor erat urna id quam.
					Morbi sapien odio, commodo in sagittis et, pellentesque a erat.
					Aenean ullamcorper orci at arcu rutrum auctor.
					Nam accumsan lacus id eleifend pulvinar. Duis sed auctor mi.
					Suspendisse iaculis congue ex, ut mattis augue pellentesque in.
					Nam fringilla vitae sapien et euismod.
					Donec viverra consectetur justo et luctus.
				</Truncate>
				<Truncate>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam in quam nec enim congue convallis eu nec odio.
					Integer faucibus id neque nec suscipit.
					Duis aliquam leo sed lacus condimentum lacinia.
					Maecenas mattis, enim vel placerat dapibus,
					nulla turpis venenatis mauris, sit amet auctor erat urna id quam.
					Morbi sapien odio, commodo in sagittis et, pellentesque a erat.
					Aenean ullamcorper orci at arcu rutrum auctor.
					Nam accumsan lacus id eleifend pulvinar. Duis sed auctor mi.
					Suspendisse iaculis congue ex, ut mattis augue pellentesque in.
					Nam fringilla vitae sapien et euismod.
					Donec viverra consectetur justo et luctus.
				</Truncate>
				<Truncate>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam in quam nec enim congue convallis eu nec odio.
					Integer faucibus id neque nec suscipit.
					Duis aliquam leo sed lacus condimentum lacinia.
					Maecenas mattis, enim vel placerat dapibus,
					nulla turpis venenatis mauris, sit amet auctor erat urna id quam.
					Morbi sapien odio, commodo in sagittis et, pellentesque a erat.
					Aenean ullamcorper orci at arcu rutrum auctor.
					Nam accumsan lacus id eleifend pulvinar. Duis sed auctor mi.
					Suspendisse iaculis congue ex, ut mattis augue pellentesque in.
					Nam fringilla vitae sapien et euismod.
					Donec viverra consectetur justo et luctus.
				</Truncate>
			</Row>
			`}
		</Code>
	</section>
);
