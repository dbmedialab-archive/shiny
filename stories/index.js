import grid from './grid';
import introduction from './introduction';
import loaders from './Loaders';
import typography from './typography';
import editorialMarking from './EditorialMarking';
import linkBars from './link-bars';
import trysilPlug from './TrysilPlug';
import floatImage from './FloatImage';
import ads from './Ads';
import lazyProgressiveImage from './LazyProgressiveImage';
import matComponents from './MatComponents';
import logos from './logos';
import forms from './forms';
import rating from './rating';
import modals from './Modal';
import breadcrumbs from './Breadcrumbs';

introduction();

// Atoms
typography();
editorialMarking();
loaders();
grid();
rating();

// Molecules
linkBars();
trysilPlug();
floatImage();
ads();
lazyProgressiveImage();
matComponents();
logos();
forms();
modals();
breadcrumbs();
