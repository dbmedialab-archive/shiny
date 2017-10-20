import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  padding: 0;
  color: ${props => props.theme.colors.type};
  font-weight: 700;
  font-family: ${props => props.theme.variables.mainFont};

  ${(props) => {
    if (props.size === 'small') {
      return `
        font-size: ${props.theme.variables.headingSmallSize};
        line-height: ${props.theme.variables.headingSmallLineHeight};
      `;
    }
    if (props.size === 'medium') {
      return `
        font-size: ${props.theme.variables.headingMediumSize};
        line-height: ${props.theme.variables.headingMediumLineHeight};
      `;
    }
    if (props.size === 'huge') {
      return `
        font-size: ${props.theme.variables.headingLargeSize};
        line-height: ${props.theme.variables.headingLargeLineHeight};
      `;
    }
    return `
      font-size: ${props.theme.variables.headingRegularSize};
      line-height: ${props.theme.variables.headingRegularLineHeight};
    `;
  }}

  a {
    color: inherit;
  }

  @media screen and (min-width: 750px) {
    ${(props) => {
    if (props.size === 'small') {
      return `
          font-size: ${props.theme.variables.headingSmallSize};
          line-height: ${props.theme.variables.headingSmallLineHeight};
      `;
    }
    if (props.size === 'medium') {
      return `
          font-size: ${props.theme.variables.headingRegularSize};
          line-height: ${props => props.theme.variables.headingRegularLineHeight};
      `;
    }
    if (props.size === 'xlarge') {
      return `
          font-size: ${props.theme.variables.headingXlargeSize};
          line-height: ${props =>
    props.theme.variables.headingXlargeLineHeight};
      `;
    }
    if (props.size === 'huge') {
      return `
        font-size: ${props.theme.variables.headingHugeSize};
        line-height: ${props.theme.variables.headingHugeLineHeight};
      `;
    }
    return `
        font-size: ${props.theme.variables.headingLargeSize};
        line-height: ${props.theme.variables.headingLargeLineHeight};
    `;
  }};
}
  `;

export const SmallHeading = props => <Heading size="small" {...props} />;
export const MediumHeading = props => <Heading size="medium" {...props} />;
export const LargeHeading = props => <Heading {...props} />;
export const XLargeHeading = props => <Heading size="xlarge" {...props} />;
export const HugeHeading = props => <Heading size="huge" {...props} />;

// import { LargeHeading } from Heading
// and
// import Heading from Heading
// are equivalent

export default Heading;
