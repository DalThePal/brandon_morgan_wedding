import styled from 'styled-components'
import colors from 'styles/colors'
import media from 'styles/media'

export const VR = styled.div`
  background-color: ${colors.roseIvory};
  position: absolute;
  left: 50%;
  transform: translate(-50%);

  width: 0.069vw;
  height: 34.236vw;
  bottom: 47.778vw;

  ${media.mobile} {
    width: 0.267vw;
    height: 131.467vw;
    bottom: 98.4vw;
  }
`
