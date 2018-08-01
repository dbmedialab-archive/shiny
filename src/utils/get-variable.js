
/**
 * Create a function that returns a variable from your theme.
 *
 * Dot-seperated variable names will look for nested variables.
 * getVariable('horizontalBase')
 * getVariable('ui.large.fontSize')
 */
export const getVariable = variable => props =>
	variable.split('.').reduce((prev, curr) => {
		return prev ? prev[curr] : undefined;
	}, props.theme.variables);
