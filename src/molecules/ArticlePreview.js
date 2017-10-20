import React from 'react';

import Article from '../atoms/Article';
import Heading from '../atoms/Heading';
import Label from '../atoms/Label';
import BlockLink from '../atoms/BlockLink';
import Image from '../atoms/Image';

export default ({ title, subtitle, image, labels }) => (
  <Article>
    <BlockLink href="#">
      {image && <Image src={image} />}
      <Heading headline>{title}</Heading>
      {subtitle && <p itemProp="description">{subtitle}</p>}
      {labels &&
        labels.map(label => (
          <Label key={label.text} color={label.color}>
            {label.text}
          </Label>
        ))}
    </BlockLink>
  </Article>
);
