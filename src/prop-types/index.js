import { getColor } from '..';
import defaultTheme from '../themes/default-theme';

/**
 * PropTypes uses an Error-like object for backward compatibility as people may
 * call PropTypes directly and inspect their output. However, they don't use
 * real Errors anymore. Their stack is not inspected anyway, and creating them
 * is prohibitively expensive if they are created too often, such as what
 * happens in oneOfType() for any type before the one that matched.
 */
function PropTypeError(message) {
	this.message = message;
	this.stack = '';
}
// Make `instanceof Error` still work for returned errors.
PropTypeError.prototype = Error.prototype;

const createChainableTypeChecker = (validate) => {
	const checkType = (isRequired, props, propName, componentName, location, propFullName, ...rest) => {
		componentName = componentName || '<<anonymous>>';
		propFullName = propFullName || propName;

		if (props[propName] == null) {
			if (isRequired) {
				if (props[propName] === null) {
					return new PropTypeError(`The ${location} \`${propFullName}\` is marked`
						+ ` as required in \`${componentName}\`, but its value is \`null\`.`);
				}
				return new PropTypeError(`The ${location} \`${propFullName}\` is marked `
					+ `as required in \`${componentName}\`, but its value is \`undefined\`.`);
			}
			return null;
		}
		return validate(props, propName, componentName, location, propFullName, ...rest);
	};

	const chainedCheckType = checkType.bind(null, false);
	chainedCheckType.isRequired = checkType.bind(null, true);

	return chainedCheckType;
};

/**
 * Validate that a color string is gettable from the theme with getColor
 */
const isValidShinyColor = (props, propName, componentName) => {
	const color = getColor(props[propName])({ theme: defaultTheme }); // eslint-disable-line react/destructuring-assignment

	if (!color) {
		return new PropTypeError(`Invalid prop \`${propName}\` supplied to`
				+ ` \`${componentName}\`. Validation failed. Use a color that`
				+ ` exists on the default theme. The color \`${props[propName]}\``
				+ ' is fake news.');
	}

	return null;
};

/**
 * Validate that a color shade is among the color shades we actually produce in the themes
 */
const isValidShade = (props, propName, componentName) => {
	const validShades = ['dark', '', 'light', 'lighter'];

	if (
		typeof props[propName] !== 'string' // eslint-disable-line react/destructuring-assignment
		|| !validShades.includes(props[propName].toLowerCase()) // eslint-disable-line react/destructuring-assignment
	) {
		return new PropTypeError(`Invalid prop \`${propName}\` supplied to`
				+ ` \`${componentName}\`. Validation failed. Use one of 'dark', '',`
				+ ' \'light\', \'lighter\'.');
	}

	return null;
};

export default {
	color: createChainableTypeChecker(isValidShinyColor),
	shade: createChainableTypeChecker(isValidShade),
};
