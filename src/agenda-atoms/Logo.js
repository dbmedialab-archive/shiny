import styled, { css } from "react-emotion"

const Logo = styled.img`
   width: ${p => p.size.width ? p => p.size.width : '200px'};
   height: ${p => p.size.height ? p => p.size.height : 'auto'};
`

export default Logo;
