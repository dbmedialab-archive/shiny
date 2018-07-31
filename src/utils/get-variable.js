
/**
 * Create a function that returns a variable from your theme.
 */
export const getVariable = variable => props => props.theme.variables[variable];

/**
 * We need to go deeper
 * Dot-seperated string to get variables deeper inside an object
 */
export const getNestedVariable = variable => (props) => {
	const vars = props.theme.variables || {};
	return variable.split('.').reduce((prev, curr) => {
		return prev ? prev[curr] : undefined;
	}, vars);
};
