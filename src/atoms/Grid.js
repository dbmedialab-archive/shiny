import styled from 'react-emotion';
import { Grid as FlexBoxGrid } from 'react-emotion-flexboxgrid';


const StyledGrid = styled(FlexBoxGrid)`
  @media only screen and (min-width: ${props => props.theme.flexboxgrid.breakpoints.lg}em) {
    width: ${props => props.theme.flexboxgrid.container.lg}rem;
  }
`;
export { StyledGrid as Grid };
