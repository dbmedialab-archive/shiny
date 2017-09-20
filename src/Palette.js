import React from 'react'
import styled from 'styled-components'
import ColorBox from './ColorBox'

const H3 = styled.h3`flex: 1 0 100%;`

const FlexBox = styled.section`
	display: flex;
	flex-wrap: wrap;
`

const Textarea = styled.textarea`
	width: 60rem;
	height: 21rem;
	background: black;
	color: #48bf48;
	font-family: monospace;
`

const Palette = () => {
	return (
		<section>
			<h2>Palette</h2>
			<p>This is the palette definition for the Sol.no brand.</p>

			<h3>Usage</h3>
			<Textarea>{`
import React from 'react';
import styled from 'styled-components';
import { colors } from '../../shared-components/Base/Palette';
const MyHeading = styled.h3\`
  color: \${colors.typeDisabled};
  background-color: \${colors.solRed};
  border: .1rem solid \${colors.solRedDark};
\`;
<MyHeading>Overskrift</MyHeading>
      `}</Textarea>

			<FlexBox>
				<H3>Brand Colors</H3>
				<ColorBox textColor="light" displayColor="solRedDark" />
				<ColorBox textColor="light" displayColor="solRed" isMainShade />
				<ColorBox textColor="dark" displayColor="solRedLight" />
				<ColorBox textColor="dark" displayColor="solRedLighter" />
			</FlexBox>

			<FlexBox>
				<ColorBox textColor="light" displayColor="solBlueDark" />
				<ColorBox textColor="light" displayColor="solBlue" isMainShade />
				<ColorBox textColor="dark" displayColor="solBlueLight" />
				<ColorBox textColor="dark" displayColor="solBlueLighter" />
			</FlexBox>

			<FlexBox>
				<H3>Type Colors</H3>
				<ColorBox textColor="light" displayColor="type" isMainShade />
				<ColorBox textColor="light" displayColor="typeLight" />
				<ColorBox textColor="dark" displayColor="typeDisabled" />
			</FlexBox>

			<FlexBox>
				<H3>Gray Tints</H3>
				<ColorBox displayColor="grayTint" isMainShade />
				<ColorBox displayColor="grayTintLight" />
				<ColorBox displayColor="grayTintLighter" />
				<ColorBox displayColor="white" />
			</FlexBox>

			<h3>Supporting Colors</h3>
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

			<h3>Link color</h3>
			<FlexBox>
				<ColorBox textColor="light" displayColor="link" />
			</FlexBox>
		</section>
	)
}

export default Palette
