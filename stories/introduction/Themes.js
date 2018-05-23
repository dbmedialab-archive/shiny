import React from 'react';

import {
	HugeHeading,
	ThemeName,
} from '../../src';

import { Code } from '../../src/atoms/Code';


const Themes = () => (
	<section>
		<HugeHeading>Themes</HugeHeading>
		<p>In shiny, we use themes to make our components look a little different
			for each brand. Currently, you are browsing Shiny with
			the <ThemeName /> theme enabled.
		</p>

		<p>A theme is basically an object that contains settings. It looks like
			this:
		</p>

		<Code language="jsx">
			{`
themeslug = {
	name,        // string,
	global,      // tagged template literal,
	colors,      // object,
	variables,   // object,
	flexboxgrid, // object,
}
			`}
		</Code>

		<table>
			<tr>
				<th>Property</th>
				<th>Type</th>
				<th>Description</th>
			</tr>
			<tr>
				<th>name</th>
				<td>string</td>
				<td>The name of the theme.</td>
			</tr>
			<tr>
				<th>global</th>
				<td>tagged template literal</td>
				<td>Will be passed to styled-components&apos;{' '}
					<a href="https://www.styled-components.com/docs/api#injectglobal">injectGlobal</a>{' '}
					when you activate your theme.
				</td>
			</tr>
			<tr>
				<th>colors</th>
				<td>object</td>
				<td>Contains all your theme&apos;s color definitions. You
				can access a color easily with the <code>getColor()</code> utility.
				</td>
			</tr>
			<tr>
				<th>flexboxlist</th>
				<td>object</td>
				<td>The flexboxlist property contains variables for use with our bundled
					grid.
				</td>
			</tr>
			<tr>
				<th>variables</th>
				<td>object</td>
				<td>The variables property contains all other variables. You can access
					You can access a variable easily with the <code>getVariable()</code>{' '}
					utility.
				</td>
			</tr>
		</table>
		<p>In the following sections we will have a look at each of these
			theme properties.
		</p>
	</section>
);

export default Themes;
