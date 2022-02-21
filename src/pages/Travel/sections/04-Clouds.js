import React, { useState } from 'react'
import styled from 'styled-components'

import { useCloudMovement } from 'utils/hooks'

import CloudPNG from 'images/cloud.png'
import PlanePNG from 'images/plane2.png'

const Clouds = () => {

  const [cloud1Ref, setCloud1Ref] = useState(null) 
  const [cloud2Ref, setCloud2Ref] = useState(null) 
  const [cloud3Ref, setCloud3Ref] = useState(null) 
 
  useCloudMovement([
    cloud1Ref,
    cloud2Ref,
    cloud3Ref
  ])

  return (
    <Wrapper data-scroll-section>
      <Cloud1 ref={ref => setCloud1Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud2 ref={ref => setCloud2Ref(ref)} src={CloudPNG} alt="cloud"/>
      <Cloud3 ref={ref => setCloud3Ref(ref)} src={CloudPNG} alt="cloud"/>
    </Wrapper>
  )
}

export default Clouds

const Wrapper = styled.section`
  width: 100%;
  position: relative;

  height: 50.764vw;
`

const Cloud1 = styled.img`
  position: absolute;
  z-index: 1;
  transform: scaleY(-1);

  width: 37.292vw;
  height: 21.319vw;
  top: 7.778vw;
  left: -7.361vw;
`

const Cloud2 = styled.img`
  position: absolute;
  z-index: 2;
  transform: scaleX(-1);

  width: 58.264vw;
  height: 33.264vw;
  top: 16.667vw;
  left: -2.083vw;
`

const Cloud3 = styled.img`
  position: absolute;
  z-index: 3;
  transform: rotate(180deg);

  width: 88.75vw;
  height: 50.764vw;
  top: 0vw;
  left: 28.889vw;
`
