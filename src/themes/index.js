import propTypes from 'propTypes';

import defaultTheme from './default-theme';
import dagbladet from './dagbladet';
import dinside from './dinside';
import kk from './kk';
import seher from './seher';
import sol from './sol';
import topp from './topp';
import mat from './mat';

const themes = {
	defaultTheme,
	dagbladet,
	dinside,
	kk,
	seher,
	sol,
	mat,
	topp,
};

export { themes };

export const themePropTypes = {
	children: propTypes.oneOfType([
		propTypes.arrayOf(propTypes.node),
		propTypes.node,
	]),
	theme: propTypes.shape({
		name: propTypes.string.isRequired,
		global: propTypes.string,
		colors: propTypes.shape({
			black: propTypes.string,
			skinColors: propTypes.shape({
				link: propTypes.string,
			}),
		}),
		flexboxgrid: propTypes.shape({
			breakpoints: propTypes.shape({
				md: propTypes.string,
			}),
		}),
		variables: propTypes.shape({
			horizontalBase: propTypes.string,
			verticalBase: propTypes.string,
		}),
	}),
};
