import React from 'react';

import { Wrapper } from '../atoms/MatHeader/Wrapper';
import { Col } from '../atoms/Col';
import Logo from '../molecules/MatHeader/Logo';
import TopBar from '../molecules/MatHeader/TopBar';
import BottomBar from '../molecules/MatHeader/BottomBar';

const MatHeader = () => (
	<Col>
		<Wrapper>
			<Logo />
			<TopBar />
			<BottomBar />
		</Wrapper>
	</Col>
);

export { MatHeader };
