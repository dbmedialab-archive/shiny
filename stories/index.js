import grid from './grid';
import introduction from './introduction';
import loaders from './Loaders';
import typography from './typography';
import editorialMarking from './EditorialMarking';
import linkBars from './link-bars';
import linkBarElements from './link-bar-elements';
import linkBarsCompleteExamples from './link-bars-complete-examples';
import trysilPlug from './TrysilPlug';
import ads from './Ads';
import matComponents from './MatComponents';
import logos from './logos';
import forms from './forms';
import rating from './rating';
import modals from './Modal';
import images from './Images';
import footers from './footers';

introduction();

// Atoms
typography();
editorialMarking();
loaders();
grid();
rating();

// Molecules
ads();
forms();
images();
linkBars();
linkBarElements();
linkBarsCompleteExamples();
logos();
matComponents();
modals();
trysilPlug();
footers();
