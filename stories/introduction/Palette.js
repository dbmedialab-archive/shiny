import React from 'react';
import styled from 'styled-components';

import { Heading, HugeHeading, SmallHeading } from '../../src/atoms/Heading';

import { ThemeName } from '../../src/atoms/ThemeName';
import { ColorBox } from '../../src/atoms/ColorBox';
import { LeetTextarea } from '../../src/atoms/LeetTextarea';

const FlexBox = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Palette = () => {
	return (
		<section>
			<HugeHeading>Welcome, adventurer!</HugeHeading>

			<p>You have arrived at the style definition for the <ThemeName /> brand.</p>

			<Heading>Colors</Heading>
			<p>
            When you set out to create a component, you probably want to use some color, whether that is a background
            color to fill your space or a text color to make your type visible.
			</p>
			<p>We use colors all the time. Here is how you can use the colors of your brand:</p>

			<SmallHeading>Using colors</SmallHeading>
			<LeetTextarea>{`
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../shared-components/Base/Palette';
const MyHeading = styled.h3\`
  color: \${colors.typeDisabled};
  background-color: \${colors.solRed};
  border: .1rem solid \${colors.solRedDark};
\`;
<MyHeading>Overskrift</MyHeading>
      `}
			</LeetTextarea>

			<SmallHeading>Palette for the <ThemeName /> theme</SmallHeading>
			<FlexBox>
				<ColorBox textColor="light" displayColor="primaryDark" />
				<ColorBox textColor="light" displayColor="primary" isMainShade />
				<ColorBox textColor="dark" displayColor="primaryLight" />
				<ColorBox textColor="dark" displayColor="primaryLighter" />
			</FlexBox>

			<FlexBox>
				<ColorBox textColor="light" displayColor="secondaryDark" />
				<ColorBox textColor="light" displayColor="secondary" isMainShade />
				<ColorBox textColor="dark" displayColor="secondaryLight" />
				<ColorBox textColor="dark" displayColor="secondaryLighter" />
			</FlexBox>

			<SmallHeading>Type Colors</SmallHeading>
			<FlexBox>
				<ColorBox textColor="light" displayColor="type" isMainShade />
				<ColorBox textColor="light" displayColor="typeLight" />
				<ColorBox textColor="dark" displayColor="typeDisabled" />
			</FlexBox>

			<SmallHeading>Gray Tints</SmallHeading>
			<FlexBox>
				<ColorBox displayColor="grayTint" isMainShade />
				<ColorBox displayColor="grayTintLight" />
				<ColorBox displayColor="grayTintLighter" />
				<ColorBox displayColor="white" />
			</FlexBox>

			<SmallHeading>Supporting Colors</SmallHeading>
			<FlexBox>
				<ColorBox textColor="light" displayColor="pinkDark" />
				<ColorBox textColor="dark" displayColor="pink" isMainShade />
				<ColorBox textColor="dark" displayColor="pinkLight" />
				<ColorBox textColor="dark" displayColor="pinkLighter" />
			</FlexBox>
			<FlexBox>
				<ColorBox textColor="light" displayColor="purpleDark" />
				<ColorBox textColor="light" displayColor="purple" isMainShade />
				<ColorBox textColor="dark" displayColor="purpleLight" />
				<ColorBox textColor="dark" displayColor="purpleLighter" />
			</FlexBox>
			<FlexBox>
				<ColorBox textColor="light" displayColor="blueDark" />
				<ColorBox textColor="dark" displayColor="blue" isMainShade />
				<ColorBox textColor="dark" displayColor="blueLight" />
				<ColorBox textColor="dark" displayColor="blueLighter" />
			</FlexBox>
			<FlexBox>
				<ColorBox textColor="light" displayColor="tealDark" />
				<ColorBox textColor="light" displayColor="teal" isMainShade />
				<ColorBox textColor="dark" displayColor="tealLight" />
				<ColorBox textColor="dark" displayColor="tealLighter" />
			</FlexBox>
			<FlexBox>
				<ColorBox textColor="light" displayColor="greenDark" />
				<ColorBox textColor="dark" displayColor="green" isMainShade />
				<ColorBox textColor="dark" displayColor="greenLight" />
				<ColorBox textColor="dark" displayColor="greenLighter" />
			</FlexBox>
			<FlexBox>
				<ColorBox textColor="light" displayColor="yellowDark" />
				<ColorBox textColor="dark" displayColor="yellow" isMainShade />
				<ColorBox textColor="dark" displayColor="yellowLight" />
				<ColorBox textColor="dark" displayColor="yellowLighter" />
			</FlexBox>
			<FlexBox>
				<ColorBox textColor="light" displayColor="orangeDark" />
				<ColorBox textColor="dark" displayColor="orange" isMainShade />
				<ColorBox textColor="dark" displayColor="orangeLight" />
				<ColorBox textColor="dark" displayColor="orangeLighter" />
			</FlexBox>
			<FlexBox>
				<ColorBox textColor="light" displayColor="brownDark" />
				<ColorBox textColor="light" displayColor="brown" isMainShade />
				<ColorBox textColor="dark" displayColor="brownLight" />
				<ColorBox textColor="dark" displayColor="brownLighter" />
			</FlexBox>
			<FlexBox>
				<ColorBox textColor="light" displayColor="darkness" />
				<ColorBox textColor="light" displayColor="darknessLight" />
			</FlexBox>

			<SmallHeading>Link color</SmallHeading>
			<FlexBox>
				<ColorBox textColor="light" displayColor="link" />
			</FlexBox>
		</section>
	);
};

export default Palette;
