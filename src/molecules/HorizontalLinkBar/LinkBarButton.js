import React from 'react';
import propTypes from 'prop-types';

import { VeryPrettyButton } from './styles/VeryPrettyStyles';

const LinkBarButton = ({ children, ...rest }) => {
  return (
    <VeryPrettyButton
      {...rest}
    >
      {children}
    </VeryPrettyButton>
  );
};

LinkBarButton.propTypes = {
  isActive: propTypes.bool,
  children: propTypes.node.isRequired,
  activeBackground: propTypes.string,
  size: propTypes.oneOf(['small', 'large']),
  useUnderline: propTypes.bool,
};

LinkBarButton.defaultProps = {
  isActive: false,
  activeBackground: 'transparent',
  size: 'large',
  useUnderline: true,
};

export const SmallLinkBarButton = props => <LinkBarButton size="small" {...props} />;
export default LinkBarButton;
