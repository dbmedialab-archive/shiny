import React from 'react';

import { HorizontalLinkBar } from './HorizontalLinkBar';
import { BreadcrumbItem } from '../atoms/Breadcrumbs/BreadcrumbItem';

const BreadcrumbBar = props => <HorizontalLinkBar ListElementItem={BreadcrumbItem} {...props} />;

export { BreadcrumbBar };
