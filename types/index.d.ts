import * as React from 'react';
import {
	StatelessComponent,
	ComponentClass,
	PureComponent,
	ReactElement,
	Component,
	SFC,
} from 'react';

import * as styled from 'styled-components'
import {
	StyledComponentClass
} from 'styled-components'

interface Label {
	text: string;
	color: string;
}

interface TrysilPlugProps {
	kicker?: string;
	title?: string;
	subtitle?: string;
	image?: string;
	labels?: Label[];
	url: string;
}
declare class TrysilPlug extends PureComponent<TrysilPlugProps> {}

interface ColProps {
	xs?: boolean | number;
	sm?: boolean | number;
	md?: boolean | number;
	lg?: boolean | number;
	reverse?: boolean;
}
declare class Col extends PureComponent<ColProps, any> {}

interface RowProps {
}
declare class Row extends PureComponent<RowProps, any> {}

interface GridProps {
}
declare class Grid extends PureComponent<GridProps, any> {}

interface LinkBarLinkProps {
	linkText?: string;
	url?: string;
	isActive?: boolean;
	activeBackground?: string;
	size?: string; // oneOf(['small', 'large']);
	useUnderline?: boolean;
}
export const LinkBarLink: StyledComponentClass<LinkBarLinkProps, any>

interface HorizontalLinkBarProps {
	background?: string;
	overflow?: string;
	shouldAdjustForNestedPadding?: boolean;
	shouldFlexChildren?: boolean;
	shouldFadeOut?: boolean;
	width?: string;
	shouldHavePadding?: boolean;
	zIndex?: number;
	isTopLevelComponent?: boolean;
}
export const HorizontalLinkBar: StyledComponentClass<HorizontalLinkBarProps, any>

interface FullWidthLinkBarProps extends HorizontalLinkBarProps {
	fixed?: boolean;
}

export const FullWidthLinkBar: StyledComponentClass<FullWidthLinkBarProps, any>

export const GlobalStyle: StyledComponentClass<{}, {}>

export const themes : {
	defaultTheme: theme
}

interface theme {
	colors: {
		primary: string,
		secondary: string,
	}
}

