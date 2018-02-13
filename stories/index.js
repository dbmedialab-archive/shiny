import grid from './grid';
import introduction from './introduction';
import loaders from './Loaders';
import typography from './Typography';
import editorialMarking from './EditorialMarking';
import linkBars from './link-bars';
import trysilPlug from './TrysilPlug';
import floatImage from './FloatImage';
import ads from './Ads';
import lazyProgressiveImage from './LazyProgressiveImage';
import headers from './Headers';
import matComponents from './MatComponents';
import logos from './logos';
import forms from './forms';
import heroes from './Heroes';
import raiting from './Raiting';
import lists from './Lists';

introduction();

// Atoms
typography();
editorialMarking();
loaders();
grid();
raiting();

// Molecules
linkBars();
trysilPlug();
floatImage();
ads();
lazyProgressiveImage();
headers();
matComponents();
logos();
forms();
heroes();
lists();
