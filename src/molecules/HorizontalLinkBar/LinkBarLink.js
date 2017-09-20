import React from 'react';
import propTypes from 'prop-types';

import { VeryPrettyA } from './styles/VeryPrettyStyles';

const LinkBarLink = ({ linkText, url, ...rest }) => {
  return (
    <VeryPrettyA
      href={url}
      skin={linkText.toLowerCase()}
      useUnderline
      {...rest}
    >{linkText}</VeryPrettyA>
  );
};

LinkBarLink.propTypes = {
  isActive: propTypes.bool,
  linkText: propTypes.string,
  activeBackground: propTypes.string,
  size: propTypes.oneOf(['small', 'large']),
  url: propTypes.string,
  useUnderline: propTypes.bool,
};

LinkBarLink.defaultProps = {
  isActive: false,
  linkText: 'Manglende lenketekst',
  activeBackground: 'transparent',
  size: 'large',
  url: '#',
  useUnderline: true,
};

export default LinkBarLink;
