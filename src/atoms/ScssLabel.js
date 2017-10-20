import React from 'react';
import propTypes from 'prop-types';
import isClient from 'is-client';

import withStyles from 'aurora-core/dist/decorators/with-styles';

const isBrowser = isClient();

const Label = (props) => {
  const { text, ...rest } = props;

  return <span {...rest} className="label">{text}</span>;
};

Label.propTypes = {
  text: propTypes.string.isRequired,
};

const applyStyles = withStyles({
  serverPath: `${__dirname}/label.scss`,
  clientStyles: isBrowser && require('./label.scss'), // eslint-disable-line global-require
});

export default applyStyles(Label);
