import styled from 'styled-components';
import { largeWidth } from '../Base/variables';

const LargeScreenText = styled.span`
  display: none;

  @media (min-width: ${largeWidth}) {
    display: inline;
  }
`;

export default LargeScreenText;
