import React from 'react';

import { NavigationMenu } from '../../atoms/MatHeader/NavigationMenu';
import { NavigationMenuItem } from '../../atoms/MatHeader/NavigationMenuItem';
import { NavigationMenuItemLink } from '../../atoms/MatHeader/NavigationMenuItemLink';

export default () => (
	<NavigationMenu>
		<NavigationMenuItem>
			<NavigationMenuItemLink>Oppskrifter</NavigationMenuItemLink>
		</NavigationMenuItem>
		<NavigationMenuItem>
			<NavigationMenuItemLink>Trinn-For-Trinn-Video</NavigationMenuItemLink>
		</NavigationMenuItem>
		<NavigationMenuItem>
			<NavigationMenuItemLink>Bli Inspirert</NavigationMenuItemLink>
		</NavigationMenuItem>
		<NavigationMenuItem>
			<NavigationMenuItemLink>Populært Nå</NavigationMenuItemLink>
		</NavigationMenuItem>
	</NavigationMenu>
);
