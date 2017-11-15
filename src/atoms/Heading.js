import styled from 'styled-components';

export const Heading = styled.h1`
  padding: 0;
  color: ${props => props.theme.colors.type};
  font-weight: 700;
  font-family: ${props => props.theme.variables.mainFont};
  font-size: ${props => props.theme.variables.headingRegularSize};
  line-height: ${props => props.theme.variables.headingRegularLineHeight};
  @media screen and (min-width: ${props => props.theme.variables.largeSize}) {
    font-size: ${props => props.theme.variables.headingRegularSize};
    line-height: ${props => props.theme.variables.headingRegularLineHeight};
  }
`;

export const SmallHeading = styled(Heading) `
  font-size: ${props => props.theme.variables.headingSmallSize};
  line-height: ${props => props.theme.variables.headingSmallLineHeight};
`;

export const MediumHeading = styled(Heading) `
  font-size: ${props => props.theme.variables.headingMediumSize};
  line-height: ${props => props.theme.variables.headingMediumLineHeight};
`;

export const LargeHeading = styled(Heading) `
  @media screen and (min-width: ${props => props.theme.variables.largeSize}) {
    font-size: ${props => props.theme.variables.headingLargeSize};
    line-height: ${props => props.theme.variables.headingLargeLineHeight};
  }
`;

export const XLargeHeading = styled(Heading) `
  @media screen and (min-width: ${props => props.theme.variables.largeSize}) {
    font-size: ${props => props.theme.variables.headingXlargeSize};
    line-height: ${props => props.theme.variables.headingXlargeLineHeight};
  }
`;

export const HugeHeading = styled(Heading) `
  font-size: ${props => props.theme.variables.headingLargeSize};
  line-height: ${props => props.theme.variables.headingLargeLineHeight};
  @media screen and (min-width: ${props => props.theme.variables.largeSize}) {
    font-size: ${props => props.theme.variables.headingHugeSize};
    line-height: ${props => props.theme.variables.headingHugeLineHeight};
  }
`;

export default Heading;
