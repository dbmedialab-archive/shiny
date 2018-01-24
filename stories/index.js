import grid from './grid';
import introduction from './introduction';
import loaders from './Loaders';
import typography from './Typography';
import editorialMarking from './EditorialMarking';
import horizontalLinkBar from './HorizontalLinkBar';
import trysilPlug from './TrysilPlug';
import floatImage from './FloatImage';
import ads from './Ads';
import lazyProgressiveImage from './LazyProgressiveImage';
import footer from './footer';
import steps from './steps';
import headers from './Headers';
import matComponents from './MatComponents';
import adTags from "./adTags";

introduction();

// Atoms
typography();
editorialMarking();
loaders();
grid();

// Molecules
horizontalLinkBar();
trysilPlug();
floatImage();
ads();
lazyProgressiveImage();
footer();
steps();
headers();
adTags();
matComponents();
