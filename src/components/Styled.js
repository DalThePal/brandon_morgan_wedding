import styled from 'styled-components'
import colors from 'styles/colors'
import media from 'styles/media'

export const VR = styled.div`
  background-color: ${colors.roseIvory};
  position: absolute;
  
  width: 0.069vw;

  ${media.mobile} {
    width: 0.267vw;
  }
`
