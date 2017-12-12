import * as React from 'react';
import {
	StatelessComponent,
	ComponentClass,
	PureComponent,
	ReactElement,
	Component,
} from 'react';

import * as styled from 'styled-components'

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
declare class LinkBarLink extends PureComponent<LinkBarLinkProps, any> {}

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
declare class HorizontalLinkBar extends PureComponent<HorizontalLinkBarProps, any> {}

interface FullWidthLinkBarProps extends HorizontalLinkBarProps {
	fixed?: boolean;
}
declare class FullWidthLinkBar extends PureComponent<FullWidthLinkBarProps, any> {}
