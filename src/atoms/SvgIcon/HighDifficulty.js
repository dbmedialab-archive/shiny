import React from 'react';
import SvgIconWrapper from './SvgIconWrapper';

const HighDifficulty = props => (
	<SvgIconWrapper size={props.size}>
		<svg width="100%" height="100%" viewBox="-10 -20 50 50">
			<g id="Symbols" stroke="none" fill="none" fillRule="evenodd">
				<g id="nivå-stor/avansert" fill="#333333">
					<g id="nivå" transform="translate(12.500000, 11.000000) scale(-1, 1) translate(-12.500000, -11.000000) ">
						<polygon id="Fill-1" points="0 22.0000005 6.60000014 22.0000005 6.60000014 0 0 0" />
						<polygon id="Fill-2" points="8.80000019 22.0000005 15.4000003 22.0000005 15.4000003 5.50000012 8.80000019 5.50000012" />
						<polygon id="Fill-3" points="17.6000004 22.0000005 24.2000005 22.0000005 24.2000005 11.0000002 17.6000004 11.0000002" />
						<rect id="Rectangle" x="9.90000021" y="6.60000014" />
						<rect id="Rectangle-Copy" x="1.10000002" y="1.10000002" width="4.4000001" height="19.8000004" />
					</g>
				</g>
			</g>
		</svg>
	</SvgIconWrapper>
);

export {HighDifficulty};