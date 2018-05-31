import React from 'react';
import Loadable from 'react-loadable';
import { DotLoader } from './atoms/loaders/DotLoader';

const makeLoadable = ({ module, namedExport }) => Loadable({
	loader: () => import(`${module}`),
	loading: DotLoader,
	render(loaded, props) {
		const Component = loaded[namedExport];
		return <Component {...props} />;
	},
});


// Themes
export { themes                  } from './themes';

// Atoms
export {
	Heading,
	SmallHeading,
	MediumHeading,
	LargeHeading,
	XLargeHeading,
	HugeHeading,
}                                  from './atoms/Heading';

export {
	DymoHeading,
	SmallDymoHeading,
	MediumDymoHeading,
	LargeDymoHeading,
	XLargeDymoHeading,
	HugeDymoHeading,
}                                  from './atoms/DymoHeading';

export {
	PlugHeading,
	SmallPlugHeading,
	MediumPlugHeading,
	LargePlugHeading,
	XLargePlugHeading,
	HugePlugHeading,
}                                  from './atoms/PlugHeading';

export {
	UnderlinedHeading,
	UnderlinedXSmallHeading,
	UnderlinedSmallHeading,
	UnderlinedMediumHeading,
	UnderlinedLargeHeading,
	UnderlinedXLargeHeading,
	UnderlinedHugeHeading,
}                                  from './atoms/UnderlinedHeading';
export {
	FrontSmallHeading,
	FrontMediumHeading,
	FrontLargeHeading,
	FrontXLargeHeading,
	FrontHugeHeading,
}                                  from './atoms/FrontHeading';

export const Article =                  makeLoadable({ module: './atoms/Article', namedExport: 'Article' });
export const AdWrapper =                makeLoadable({ module: './atoms/AdWrapper', namedExport: 'AdWrapper' });
export { BlockLink } from './atoms/BlockLink';
// export const BlockLink =                makeLoadable({ module: './atoms/BlockLink', namedExport: 'BlockLink' });
export const BlockLinkWithBackground =  makeLoadable({ module: './atoms/BlockLinkWithBackground', namedExport: 'BlockLinkWithBackground' });
export const BlockQuote =               makeLoadable({ module: './atoms/BlockQuote', namedExport: 'BlockQuote' });
export const BodyText =                 makeLoadable({ module: './atoms/BodyText', namedExport: 'BodyText' });

export { Button } from './atoms/Button';
// export const Button =                   makeLoadable({ module: './atoms/Button', namedExport: 'Button' });
export const BylineImage =              makeLoadable({ module: './atoms/BylineImage', namedExport: 'BylineImage' });
export const BylineName =               makeLoadable({ module: './atoms/BylineName', namedExport: 'BylineName' });
export const BylineWithTwoLines =       makeLoadable({ module: './atoms/BylineWithTwoLines', namedExport: 'BylineWithTwoLines' });
export const ColorTextBox =             makeLoadable({ module: './atoms/MainRecipe/ColorTextBox', namedExport: 'ColorTextBox' });
export const YoutubeFrame =             makeLoadable({ module: './atoms/MainRecipe/youtubeFrame', namedExport: 'YoutubeFrame' });
export const Caption =                  makeLoadable({ module: './atoms/Caption', namedExport: 'Caption' });
export { Cite                    } from './atoms/Cite';
export { Tag                     } from './atoms/Tag';
export { Col                     } from './atoms/Col';
export { ColorBox                } from './atoms/ColorBox';
export { DontPushTheAdBoundaries } from './atoms/DontPushTheAdBoundaries';
export { DotLoader               } from './atoms/loaders/DotLoader';
export { Dropdown                } from './atoms/Dropdown';
export { Error                   } from './atoms/Error';
export { Figure                  } from './atoms/Figure';
export { FigCaption              } from './atoms/FigCaption';
export { FontIcon                } from './atoms/FontIcon';
export { SvgIcon                 } from './atoms/SvgIcon';
export { IconWithText            } from './atoms/IconWithText';
export { GlobalStyle             } from './atoms/GlobalStyle';
export { Grid                    } from './atoms/Grid';
export { NoPaddingGrid           } from './atoms/NoPaddingGrid';
export { Header                  } from './atoms/Header';
export { HorizontalOverflowGradient } from './atoms/HorizontalOverflowGradient';
export { Image                   } from './atoms/Image';
export { Kicker                  } from './atoms/Kicker';
export { Label                   } from './atoms/Label';
export { LeetTextarea            } from './atoms/LeetTextarea';
export { Link                    } from './atoms/Link';
export { ListItem                } from './atoms/ListItem';
export { LoadingSearchIcon       } from './atoms/loaders/LoadingSearchIcon';
export { LunchKicker             } from './atoms/LunchKicker';
export { NativeAdKicker          } from './atoms/NativeAdKicker';
export { Pips                    } from './atoms/Pips';
export { PublishedDate           } from './atoms/PublishedDate';
export { Quote                   } from './atoms/Quote';
export { Row                     } from './atoms/Row';
export { Standfirst              } from './atoms/Standfirst';
export { ThemeName               } from './atoms/ThemeName';
export { HorizontalFlexingList   } from './atoms/HorizontalFlexingList';
export { VerticalFlexingList     } from './atoms/VerticalFlexingList';
export { LinkBarNav              } from './atoms/LinkBarNav';
export { LinkBarItem             } from './atoms/LinkBarItem';
export { XSmallLinkBarLink       } from './atoms/LinkBarLink';
export { SmallLinkBarLink        } from './atoms/LinkBarLink';
export { LinkBarLink             } from './atoms/LinkBarLink';
export { BorderedButton          } from './atoms/BorderedButton';
export { LargeLinkBarLink        } from './atoms/LinkBarLink';
export { XSmallLinkBarHeading    } from './atoms/LinkBarHeading';
export { SmallLinkBarHeading     } from './atoms/LinkBarHeading';
export { LinkBarHeading          } from './atoms/LinkBarHeading';
export { LargeLinkBarHeading     } from './atoms/LinkBarHeading';
export { LinkBarLinkBase         } from './atoms/LinkBarLinkBase';
export { LinkBarButton           } from './atoms/LinkBarButton';
export { SmallLinkBarButton      } from './atoms/LinkBarButton';
export { XSmallLinkBarButton     } from './atoms/LinkBarButton';
export { LinkBarButtonBase       } from './atoms/LinkBarButtonBase';
export { XSmallLinkBarDropdown   } from './atoms/LinkBarDropdown';
export { SmallLinkBarDropdown    } from './atoms/LinkBarDropdown';
export { LinkBarDropdown         } from './atoms/LinkBarDropdown';
export { LargeLinkBarDropdown    } from './atoms/LinkBarDropdown';
export { ShinyLogo               } from './atoms/ShinyLogo';
export { ThemeSelector           } from './atoms/ThemeSelector';
export { TopBarSearchField       } from './atoms/MatHeader/TopBarSearchField';
export { LeftScrollArrow         } from './atoms/ScrollArrow';
export { RightScrollArrow        } from './atoms/ScrollArrow';
export { SeHerLogo               } from './atoms/SeHerLogo';
export { DagbladetLogo           } from './atoms/DagbladetLogo';
export { MoreComponent           } from './atoms/MainRecipe/MoreLine';
export { KKLogo                  } from './atoms/KKLogo';
export { ButtonWithModal         } from './atoms/ButtonWithModal';
export { NumberedListItem        } from './atoms/NumberedListItem';
export { ActivityTime            } from './atoms/SvgIcon/ActivityTime';
export { Difficulty              } from './atoms/SvgIcon/Difficulty';
export { TotalTime               } from './atoms/SvgIcon/TotalTime';
export { RoundedButton           } from './atoms/RoundedButtons';
export { SmallRoundedButton      } from './atoms/RoundedButtons';
export { TinyRoundedButton       } from './atoms/RoundedButtons';
export { ArrowBullet 			 } from './atoms/ArrowBullet';

// Molecules
// export { NavWithOptionalConstrainer } from './molecules/NavWithOptionalConstrainer';
export { HorizontalLinkBar       } from './molecules/HorizontalLinkBar';
export { VerticalLinkBar         } from './molecules/VerticalLinkBar';
export { ThemeSwitcher           } from './molecules/ThemeSwitcher';
export {
	SmallHorizontalHeroUnit,
	MediumHorizontalHeroUnit,
	LargeHorizontalHeroUnit,
} from './molecules/HorizontalHeroUnit';
export { WallpaperAd             } from './molecules/WallpaperAd';
export { StarsRating             } from './molecules/StarsRating';
export { SearchField             } from './molecules/SearchField';

/* eslint-disable max-len */
export const NavWithOptionalConstrainer = makeLoadable({ module: './molecules/NavWithOptionalConstrainer', namedExport: 'NavWithOptionalConstrainer' });
// export const HorizontalLinkBar          = makeLoadable({ module: './molecules/HorizontalLinkBar', namedExport: 'HorizontalLinkBar' });
// export const VerticalLinkBar            = makeLoadable({ module: './molecules/VerticalLinkBar', namedExport: 'VerticalLinkBar' });
export const FullWidthLinkBar           = makeLoadable({ module: './molecules/FullWidthLinkBar', namedExport: 'FullWidthLinkBar' });
export const ScrollArrowsLinkBar        = makeLoadable({ module: './molecules/ScrollArrowsLinkBar', namedExport: 'ScrollArrowsLinkBar' });
export const Dice                       = makeLoadable({ module: './molecules/Dice', namedExport: 'Dice' });
export const TagSection                 = makeLoadable({ module: './molecules/TagSection', namedExport: 'TagSection' });
export const FloatImage                 = makeLoadable({ module: './molecules/FloatImage', namedExport: 'FloatImage' });
export const IconBar                    = makeLoadable({ module: './molecules/IconBar', namedExport: 'IconBar' });
export const Labels                     = makeLoadable({ module: './molecules/Labels', namedExport: 'Labels' });
export const LunchButton                = makeLoadable({ module: './molecules/LunchButton', namedExport: 'LunchButton' });
export const TrysilPlug                 = makeLoadable({ module: './molecules/TrysilPlug', namedExport: 'TrysilPlug' });
// export const ThemeSwitcher              = makeLoadable({ module: './molecules/ThemeSwitcher', namedExport: 'ThemeSwitcher' });
export const GenericAd                  = makeLoadable({ module: './molecules/GenericAd', namedExport: 'GenericAd' });
export const StickyAd                   = makeLoadable({ module: './molecules/StickyAd', namedExport: 'StickyAd' });
export const FullscreenAd               = makeLoadable({ module: './molecules/FullscreenAd', namedExport: 'FullscreenAd' });
export const LazyProgressiveImage       = makeLoadable({ module: './molecules/LazyProgressiveImage', namedExport: 'LazyProgressiveImage' });
export const Source                     = makeLoadable({ module: './molecules/Source', namedExport: 'Source' });
export const RecipeMetaData             = makeLoadable({ module: './molecules/MainRecipe/RecipeMetaData', namedExport: 'RecipeMetaData' });
export const NumberedList               = makeLoadable({ module: './molecules/NumberedList', namedExport: 'NumberedList' });

// Organisms
export { OppskriftFooter         } from  './molecules/Footers/OppskriftFooter';

// Utils
export { getColor                } from './utils/get-color';
export { getVariable             } from './utils/get-variable';
