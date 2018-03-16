import React from 'react';
import Observer from 'react-intersection-observer';
import 'intersection-observer';

import { AdWrapper } from '../atoms/AdWrapper';

const StyledAdWrapper = AdWrapper.extend`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: ${props => (props.shouldHide ? 'none' : 'block')};
  z-index: 5;

  & > div {
    z-index: 4;
    position: ${props => (props.isVisible ? 'fixed' : 'absolute')};
    top: 0;
    padding: 0;
    width: 100% !important;
    height: 100vh !important;
    max-width: 100% !important;
  }

  & iframe {
    width: 100% !important;
    height: 100vh !important;
  }
`;

const FullscreenAd = (props) => {
	return (
		<Observer rootMargin="15%">
			{inView => (<StyledAdWrapper {...props} isVisible={inView} />)}
		</Observer>
	);
};

export { FullscreenAd };

