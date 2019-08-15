import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor } from '../utils';

const Svg = styled.svg`
	& .primary {
		fill: ${getColor('primary')};
	}

	& .secondary {
		fill: ${getColor('secondary')};
	}

	& .st2 {
		fill: #FAB800;
	}

	& .st3 {
		fill: url(#SVGID_1_);
	}

	& .st4 {
		fill: url(#SVGID_2_);
	}

	& .st5 {
		fill: url(#SVGID_3_);
	}

	& .st6 {
		opacity: 0.28;
		fill: url(#SVGID_4_);
	}

	& .st7 {
		opacity: 0.28;
		fill: url(#SVGID_5_);
	}

	& .st8 {
		opacity: 0.28;
		fill: url(#SVGID_6_);
	}

	& .st9 {
		opacity: 0.28;
		fill: url(#SVGID_7_);
	}

	& .st10 {
		opacity: 0.28;
		fill: url(#SVGID_8_);
	}
`;

/* eslint-disable max-len */

/** Dinside Main Logo */
const DinsideLogo = ({ twentyYearAnniversary }) => (
	<Svg role="img" aria-labelledby="title" id="DinsideLogo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={`0 0 ${twentyYearAnniversary ? '411.8' : '296.8'} 68.8`}>
		<title id="title">Dinside Logo</title>
		<path
			className="primary"
			d="M0,5.7h27.7c23.3,0,33.9,11,33.9,30.7c0,20.7-10.3,31.8-34.7,31.8H0V5.7z M26.1,52.7c7,0,10.5-3.5,10.5-15.2 c0-11.7-3.2-15.6-10.5-15.6h-1.4v30.8L26.1,52.7L26.1,52.7z"
		/>
		<path
			className="primary"
			d="M66.6,68.2V20.9h15.5c6.3,0,7.5,1.8,7.5,9.8v37.5L66.6,68.2L66.6,68.2z M67.1,9.9c0-5.7,4.4-9.1,11.1-9.1 c6.7,0,11.1,3.4,11.1,9.1s-4.4,9-11.1,9C71.5,18.9,67.1,15.6,67.1,9.9z"
		/>
		<path
			className="primary"
			d="M96.8,68.2V20.9h16.5c3.3,0,5.2,1,6,7.4c3.8-4.3,8.6-8.3,16.7-8.3c7.6,0,13.1,3.5,13.1,13.8v34.4h-23V40.1 c0-2.9-1.5-3.3-5-3.3c-0.4,0-0.9,0-1.3,0.1v31.4H96.8z"
		/>
		<path
			className="secondary"
			d="M155.6,64.6v-7.1h2.9c2.1,2.1,6.1,4.2,11.9,4.2c6.5,0,9.7-2.3,9.7-6.8c0-3.9-2.2-5.6-9.8-6.8 c-9.5-1.3-14.7-4.8-14.7-13.5c0-8.8,6.5-13.7,16.8-13.7c6.6,0,10.6,1.5,13.8,3.3v7h-2.9c-2.2-1.8-5.6-3.3-10.7-3.3 c-6,0-8.8,2.1-8.8,6c0,3.7,2.6,5.3,9.9,6.3c10.3,1.5,15.1,4.9,15.1,13.8c0,8.8-5.6,14.6-17.9,14.6 C163.2,68.7,158.8,66.6,155.6,64.6z"
		/>
		<path
			className="secondary"
			d="M192.9,11.2c0-2.9,2.5-5.4,5.4-5.4c2.9,0,5.4,2.4,5.4,5.4c0,2.9-2.5,5.2-5.4,5.2 C195.4,16.3,192.9,14,192.9,11.2z M193.6,68.2V21.5h5.1c3.6,0,4,1.1,4,7v39.8H193.6z"
		/>
		<path
			className="secondary"
			d="M241.1,61.9c-3.2,3.8-8.2,6.9-14.7,6.9c-9.7,0-18-7-18-23.2c0-18.3,9.9-24.7,19.3-24.7 c6.4,0,10.3,1.9,13.3,4.8V5.7h5c3.6,0,4.1,0.9,4.1,6.1v56.5h-6C242.1,68.2,241.4,67.2,241.1,61.9z M241,55.8V32.1 c-2.7-2.5-5.9-3.9-10.7-3.9c-6.2,0-12.7,3.3-12.7,17c0,12.8,4.7,17,11.1,17C233.9,62.1,237.5,59.7,241,55.8z"
		/>
		<path
			className="secondary"
			d="M264.7,46.6c0.4,11.1,5.4,15.3,14.2,15.3c6,0,10.1-2,13-4.3h2.9V64c-3.4,2.3-8.5,4.8-17.2,4.8 c-14.3,0-22.2-9.1-22.2-23.8c0-14.9,9.2-24.2,21.3-24.2c12.3,0,19.6,7.2,19.6,22.6c0,1.3-0.1,2.9-0.1,3.2H264.7z M264.9,40.6h22.3 c-0.2-10.1-4.1-13.6-10.5-13.6C270.6,27.1,265.9,30.7,264.9,40.6z"
		/>

		{ twentyYearAnniversary && (
			<Fragment>
				<path
					className="secondary"
					d="M405.3,65.5l0.2-7.4l6.4,3.9L405.3,65.5z M406.5,59.9l-0.1,3.8l3.3-1.8L406.5,59.9z"
				/>
				<rect x="349.3" y="45.2" className="primary" width="2.1" height="2.1" />
				<rect
					x="402.5"
					y="7.5"
					transform="rotate(47.375 404.123 9.144)"
					className="primary"
					width="3.2"
					height="3.2"
				/>
				<path
					className="primary"
					d="M306.7,44.9l-2.9-3.1l3.1-2.9l2.9,3.1L306.7,44.9z M305.3,41.9l1.5,1.6l1.6-1.5l-1.5-1.6L305.3,41.9z"
				/>
				<path
					className="secondary"
					d="M349.2,9.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5S350.6,9.5,349.2,9.5z M349.2,5.6 c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4S350,5.6,349.2,5.6z"
				/>
				<path
					className="st2"
					d="M351.6,53.6v14.1h-42.9v-8.3l3.9-3.9c1.7-1.7,3.3-3.3,4.9-5c3.3-3.3,6.6-6.7,10-10c0.7-0.7,1.4-1.3,2.1-2 c1.5-1.4,2.9-2.7,4.2-4.1c1.5-1.6,2.6-3.2,3.2-4.8c0.2-0.6,0.4-1.3,0.4-1.9c0-4.1-3.3-7.4-7.4-7.4c-1.2,0-2.4,0.3-3.4,0.8 c-0.4,0.2-0.8,0.4-1.1,0.7c0,0,0,0,0,0c-0.6,0.5-1.2,1.1-1.6,1.8c-0.8,1.2-1.2,2.5-1.2,4h-14.1c0-11.8,9.6-21.5,21.5-21.5 c9,0,16.6,5.5,19.9,13.3c0.8,1.9,1.3,3.9,1.5,6.1c0.1,0.7,0.1,1.4,0.1,2.1c0,3.5-0.9,6.6-2.4,9.4c0,0,0,0.1-0.1,0.1 c-0.7,1.4-1.6,2.7-2.5,4v0c-1.3,1.8-2.8,3.3-4.3,4.8l0,0c-0.5,0.5-1,1-1.5,1.4l-0.5,0.5l-0.1,0.1c-0.3,0.3-0.6,0.6-0.9,0.9 c-0.7,0.6-1.3,1.2-1.9,1.8c-1,1-2.1,2-3.1,3.1H351.6z"
				/>
				<linearGradient
					id="SVGID_1_"
					gradientUnits="userSpaceOnUse"
					x1="308.752"
					y1="41.792"
					x2="350.832"
					y2="41.792"
				>
					<stop offset="0" stopColor="#fab800" stopOpacity="0" />
					<stop offset="0.999" stopColor="#e84e1b" stopOpacity="0.7" />
				</linearGradient>
				<path
					className="st3"
					d="M350.8,29.4c0,2.7-0.6,5.3-1.6,7.7c-1.8,3.4-4.3,6.3-6.8,8.8l0,0c-0.5,0.5-1,1-1.5,1.4l-0.5,0.5l-0.1,0.1	c-0.3,0.3-0.6,0.6-0.9,0.9c-0.7,0.6-1.3,1.2-1.9,1.8c-1,1-2.1,2-3.1,3.1l0,0l-3.4,3.1l-12,11h-10.2v-8l0.9-0.9	c1.8-1.8,3.5-3.5,5.2-5.3c3.4-3.5,7-7.1,10.6-10.6c0.7-0.7,1.5-1.4,2.2-2.1c2.3-2.2,4.6-4.4,6.2-6.5c2-2.2,3.6-4.5,3.6-6.7	c0-4.1-3.3-7.4-7.4-7.4c-1.2,0-2.4,0.3-3.4,0.8c-0.4,0.2-0.8,0.4-1.1,0.7c0.7-2.1,3.5-3.7,5.4-4.5c9.2-3.7,19,0.2,19.7,10.9	C350.8,28.6,350.8,29,350.8,29.4z"
				/>
				<linearGradient
					id="SVGID_2_"
					gradientUnits="userSpaceOnUse"
					x1="318.524"
					y1="60.662"
					x2="351.625"
					y2="60.662"
				>
					<stop offset="0.001" stopColor="#e84e1b" stopOpacity="0.7" />
					<stop offset="1" stopColor="#fab800" stopOpacity="0" />
				</linearGradient>
				<polygon
					className="st4"
					points="334.3,53.6 318.5,67.7 351.6,67.7 351.6,53.6"
				/>
				<path
					className="st2"
					d="M377.9,0c-12,0-21.8,9.8-21.8,21.8v17.8c0.1,12,9.9,21.7,21.8,21.7c12,0,21.8-9.8,21.8-21.7V21.8	C399.7,9.8,389.9,0,377.9,0z M370.1,21.8c0-4.3,3.5-7.8,7.8-7.8c4.3,0,7.8,3.5,7.8,7.8v17.7c0,4.3-3.5,7.7-7.8,7.7	c-4.3,0-7.8-3.5-7.8-7.7L370.1,21.8z"
				/>
				<linearGradient
					id="SVGID_3_"
					gradientUnits="userSpaceOnUse"
					x1="377.887"
					y1="61.324"
					x2="377.887"
				>
					<stop offset="0" stopColor="#fab800" stopOpacity="0" />
					<stop offset="0.999" stopColor="#e84e1b" stopOpacity="0.7" />
				</linearGradient>
				<path
					className="st5"
					d="M377.9,0c-12,0-21.8,9.8-21.8,21.8v17.8c0.1,12,9.9,21.7,21.8,21.7c12,0,21.8-9.8,21.8-21.7V21.8	C399.7,9.8,389.9,0,377.9,0z M370.1,21.8c0-4.3,3.5-7.8,7.8-7.8c4.3,0,7.8,3.5,7.8,7.8v17.7c0,4.3-3.5,7.7-7.8,7.7	c-4.3,0-7.8-3.5-7.8-7.7L370.1,21.8z"
				/>
				<path
					className="primary"
					d="M392,59.9c2-1.6,3.3-4.3,2.9-7.1c-0.5-4.1-4-7-8.1-7h-8.6v0.2h0v21.7h6v-6h2l0,0l3.3,6h6.4l0.3-0.2L392,59.9z M384.1,51.7h2.8c1,0,1.9,0.6,2,1.6c0.3,1.3-0.7,2.4-2,2.4h-2.9V51.7z"
				/>
				<path
					className="primary"
					d="M362.5,45.7l-7,22h6l0.8-2.7h6.9l0.8,2.7h5.9l-6.9-22H362.5z M364,59.9l1.8-5.8l1.8,5.8H364z"
				/>
				<path
					className="primary"
					d="M365.1,44.1c2,0.4,3.8-1.4,3.4-3.4c-0.2-1.1-1.1-2.1-2.3-2.3c-2-0.4-3.8,1.4-3.4,3.4 C363.1,43,364,43.9,365.1,44.1z"
				/>
				<path
					className="primary"
					d="M392.1,60c1.8-1.5,3-3.7,3-6.2c0-4.4-3.6-8-8-8h-8.8v21.9h6v-6h2l3.3,6h6.4l0.3-0.2L392.1,60z M384.2,55.8v-4	h2.8c1.2,0,2.2,1.1,2,2.4c-0.2,0.9-1.1,1.6-2,1.6H384.2z"
				/>
				<path
					className="primary"
					d="M369.1,45.8h-6.6l-7,22h6l0.8-2.7h6.9l0.8,2.7h5.9L369.1,45.8z M364.1,59.9l1.8-5.8l1.8,5.8H364.1z"
				/>
				<path
					className="primary"
					d="M365.2,44.1c2,0.4,3.8-1.4,3.4-3.4c-0.2-1.1-1.1-2.1-2.3-2.3c-2-0.4-3.8,1.4-3.4,3.4	C363.2,43,364.1,43.9,365.2,44.1z"
				/>
				<linearGradient
					id="SVGID_4_"
					gradientUnits="userSpaceOnUse"
					x1="363.746"
					y1="43.357"
					x2="367.848"
					y2="39.254"
				>
					<stop offset="0" stopColor="#e84e1b" stopOpacity="0" />
					<stop offset="0.05" stopColor="#d74a1b" stopOpacity="0.05" />
					<stop offset="0.236" stopColor="#9f3c1b" stopOpacity="0.236" />
					<stop offset="0.416" stopColor="#71311b" stopOpacity="0.416" />
					<stop offset="0.587" stopColor="#4c281b" stopOpacity="0.587" />
					<stop offset="0.746" stopColor="#32221b" stopOpacity="0.746" />
					<stop offset="0.888" stopColor="#231e1b" stopOpacity="0.888" />
					<stop offset="1" stopColor="#1d1d1b" />
				</linearGradient>
				<path
					className="st6"
					d="M365.2,44.1c2,0.4,3.8-1.4,3.4-3.4c-0.2-1.1-1.1-2.1-2.3-2.3c-2-0.4-3.8,1.4-3.4,3.4	C363.2,43,364.1,43.9,365.2,44.1z"
				/>
				<linearGradient
					id="SVGID_5_"
					gradientUnits="userSpaceOnUse"
					x1="355.591"
					y1="56.729"
					x2="370.127"
					y2="56.729"
				>
					<stop offset="0.334" stopColor="#e84e1b" stopOpacity="0" />
					<stop offset="0.41" stopColor="#c0441b" stopOpacity="0.114" />
					<stop offset="0.517" stopColor="#8f391b" stopOpacity="0.274" />
					<stop offset="0.622" stopColor="#662f1b" stopOpacity="0.433" />
					<stop offset="0.725" stopColor="#46271b" stopOpacity="0.587" />
					<stop offset="0.824" stopColor="#2f211b" stopOpacity="0.736" />
					<stop offset="0.918" stopColor="#221e1b" stopOpacity="0.876" />
					<stop offset="1" stopColor="#1d1d1b" />
				</linearGradient>
				<path
					className="st7"
					d="M363.3,45.8h-0.7l-7,22h6l0.8-2.7h6.9l0.8,2.7L363.3,45.8z M364.1,59.9l1.8-5.8l1.8,5.8H364.1z"
				/>
				<linearGradient
					id="SVGID_6_"
					gradientUnits="userSpaceOnUse"
					x1="364.523"
					y1="56.756"
					x2="372.336"
					y2="48.943"
				>
					<stop offset="0.334" stopColor="#e84e1b" stopOpacity="0" />
					<stop offset="0.41" stopColor="#c0441b" stopOpacity="0.114" />
					<stop offset="0.517" stopColor="#8f391b" stopOpacity="0.274" />
					<stop offset="0.622" stopColor="#662f1b" stopOpacity="0.433" />
					<stop offset="0.725" stopColor="#46271b" stopOpacity="0.587" />
					<stop offset="0.824" stopColor="#2f211b" stopOpacity="0.736" />
					<stop offset="0.918" stopColor="#221e1b" stopOpacity="0.876" />
					<stop offset="1" stopColor="#1d1d1b" />
				</linearGradient>
				<polygon
					className="st8"
					points="363.3,45.8 369.1,45.8 373.6,59.9 367.7,59.9"
				/>
				<linearGradient
					id="SVGID_7_"
					gradientUnits="userSpaceOnUse"
					x1="389.487"
					y1="67.677"
					x2="393.481"
					y2="60.759"
				>
					<stop offset="0" stopColor="#e84e1b" stopOpacity="0" />
					<stop offset="0.05" stopColor="#d74a1b" stopOpacity="0.05" />
					<stop offset="0.236" stopColor="#9f3c1b" stopOpacity="0.236" />
					<stop offset="0.416" stopColor="#71311b" stopOpacity="0.416" />
					<stop offset="0.587" stopColor="#4c281b" stopOpacity="0.587" />
					<stop offset="0.746" stopColor="#32221b" stopOpacity="0.746" />
					<stop offset="0.888" stopColor="#231e1b" stopOpacity="0.888" />
					<stop offset="1" stopColor="#1d1d1b" />
				</linearGradient>
				<path
					className="st9"
					d="M396.2,67.5l-0.3,0.2h-6.4l-3.3-6c3.6,0,5.8-1.8,5.8-1.8L396.2,67.5z"
				/>
				<linearGradient
					id="SVGID_8_"
					gradientUnits="userSpaceOnUse"
					x1="379.62"
					y1="56.549"
					x2="382.856"
					y2="50.945"
				>
					<stop offset="0" stopColor="#e84e1b" stopOpacity="0" />
					<stop offset="0.14" stopColor="#d2491b" stopOpacity="0.14" />
					<stop offset="0.431" stopColor="#9a3b1b" stopOpacity="0.431" />
					<stop offset="0.846" stopColor="#40251b" stopOpacity="0.846" />
					<stop offset="1" stopColor="#1d1d1b" />
				</linearGradient>
				<rect x="378.3" y="51.7" className="st10" width="6" height="4" />
			</Fragment>
		)}
	</Svg>
);
/* eslint-enable max-len */

DinsideLogo.displayName = 'DinsideLogo';

DinsideLogo.propTypes = {
	/** should we show "20 år" next to the logo */
	twentyYearAnniversary: PropTypes.bool,
};

DinsideLogo.defaultProps = {
	twentyYearAnniversary: false,
};

export { DinsideLogo };
