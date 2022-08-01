import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import gsap from 'gsap'

import { ScreenContext } from 'components/Providers'

import colors from 'styles/colors'
import text from 'styles/text'
import media from 'styles/media'

import { useCloudMovement } from 'utils/hooks'

import Label from 'components/formElements/Label'
import Input from 'components/formElements/Input'
import Checkbox from 'components/formElements/Checkbox'
import Button from 'components/formElements/Button'

import { ReactComponent as ErrorSVG } from 'images/error.svg'
import DiamondGif from 'images/diamond.gif'
import CloudPNG from 'images/cloud.png'

const Form = () => {

  const { mobile } = useContext(ScreenContext)

  const stateOneRef = useRef()
  const stateTwoRef = useRef()

  const [cloud1, setCloud1] = useState()
  const [cloud2, setCloud2] = useState()
  const [cloud3, setCloud3] = useState()

  useCloudMovement([
    cloud1,
    cloud2,
    cloud3
  ])

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [plusName, setPlusName] = useState(null)
  const [present, setPresent] = useState(null)
  const [plusOne, setPlusOne] = useState(null)
  const [bus, setBus] = useState(null)
  
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [plusNameError, setPlusNameError] = useState(false)
  const [presentError, setPresentError] = useState(false)
  const [plusOneError, setPlusOneError] = useState(false)
  const [busError, setBusError] = useState(false)

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setNameError(false)
  }, [name, setNameError])

  useEffect(() => {
    setEmailError(false)
  }, [email, setEmailError])

  useEffect(() => {
    setPlusNameError(false)
  }, [plusName, setPlusNameError])

  useEffect(() => {
    setPresentError(false)
  }, [present, setPresentError])

  useEffect(() => {
    setPlusOneError(false)
  }, [plusOne, setPlusOneError])

  useEffect(() => {
    setBusError(false)
  }, [bus, setBusError])


  const validate = (variable, setError) => {
    if (variable === null) {
      setError(true)
      return true
    } else return false
  }

  const submit = (e) => {
    e.preventDefault()
    setSubmitting(true)

    let plusNameError = false
    const nameError = validate(name, setNameError)
    const emailError = validate(email, setEmailError)
    if (plusOne) {
      plusNameError = validate(plusName, setPlusNameError)
    }
    const presentError = validate(present, setPresentError)
    const plusOneError = validate(plusOne, setPlusOneError)
    const busError = validate(bus, setBusError)

    if (
      nameError || 
      emailError || 
      (plusOne && plusNameError) || 
      presentError || 
      plusOneError || 
      busError
    ) {
      setSubmitting(false)
      return
    }

    axios({
      url: `https://formspree.io/f/${process.env.REACT_APP_FORM_ID}`,
      method: 'post',
      headers: {
        'Accept': 'application/json'
      },
      data: {
        name: name,
        email: email,
        plusOne: plusOne,
        present: present,
        plusName: plusName,
        bus: bus
      }
    }).then((res) => { 
      setSubmitting(false) 
      setSubmitted(true)
    })
  }

  useEffect(() => {
    if (submitted) {
      const tl = gsap.timeline()

      tl.to(stateOneRef.current, {
        opacity: 0
      }, 0)

      tl.set(stateOneRef.current, {
        zIndex: 0
      }, 1)

      tl.to(stateTwoRef.current, {
        opacity: 1
      }, 0)
    }
  }, [submitted])

  return (
    <Wrapper>
      <State ref={stateOneRef}>
        <Group >
          <Label>Please enter your full name:</Label>
          <Input error={nameError} type="text" value={name} setValue={setName}/>
        </Group>
        <Group >
          <Label>Your email:</Label>
          <Input error={emailError} type="email" value={email} setValue={setEmail}/>
        </Group>
        <Group >
          <Label>Will we see you there?</Label>
          {presentError && <Error transform={mobile ? 'translate(-413%, 2%)' : 'translate(-1504%,5%)'}/>}
          <CheckGroup>
            <Checkbox label="Yes" selected={present} setSelected={() => setPresent(true)}/>
            <Checkbox label="No" selected={present === false} setSelected={() => setPresent(false)}/>
          </CheckGroup>
        </Group>
        <Group >
          <Label>Will you be bringing a plus-one?</Label>
          {plusOneError && <Error transform={mobile ? 'translate(-413%, 2%)' : 'translate(-1504%,5%)'}/>}
          <CheckGroup>
            <Checkbox label="Yes" selected={plusOne} setSelected={() => setPlusOne(true)}/>
            <Checkbox label="No" selected={plusOne === false} setSelected={() => setPlusOne(false)}/>
          </CheckGroup>
        </Group>
        <Group visible={plusOne === true ? true : false}>
          <Label>Your plus-one's full name (if applicable):</Label>
          <Input error={plusNameError} type="text" value={plusName} disabled={!plusOne} setValue={setPlusName}/>
        </Group>
        <Group >
          <Label>Would you use bus transportation between SLC and the wedding venue?</Label>
          {busError && <Error transform={mobile ? 'translate(-413%, 37%)' : 'translate(-1504%,5%)'}/>}
          <CheckGroup>
            <Checkbox label="Yes" selected={bus} setSelected={() => setBus(true)}/>
            <Checkbox label="No" selected={bus === false} setSelected={() => setBus(false)}/>
          </CheckGroup>
        </Group>
        <Button disabled={submitting} onClick={submit}>Submit RSVP</Button>
      </State>
      <StateTwo ref={stateTwoRef}>
        <Title>thanks for your reply!</Title>
        <Diamond src={DiamondGif} alt="diamond"/>
        <Cloud1 ref={ref => setCloud1(ref)} src={CloudPNG} alt="cloud"/>
        <Cloud2 ref={ref => setCloud2(ref)} src={CloudPNG} alt="cloud"/>
        <Cloud3 ref={ref => setCloud3(ref)} src={CloudPNG} alt="cloud"/>
      </StateTwo>
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${colors.roseIvory};

  width: 45.83vw;
  height: 43.61vw;

  ${media.mobile} {
    height: 165.87vw;
    width: 89.07vw;
  }
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  transition: 500ms;
  overflow: hidden;
  position: relative;
  transform: ${props => props.visible === false ? 'translateY(-50%)' : 'translateY(0%)'};
  opacity: ${props => props.visible === false ? 0 : 1};
  height: ${props => props.visible === false ? 0 : 'auto'};
  margin-bottom: ${props => props.visible === false ? 0 : '1.39vw'};

  gap: 0.69vw;

  ${media.mobile} {
    gap: 2.67vw;
    margin-bottom: ${props => props.visible === false ? 0 : '5.33vw'};
  }
`

const CheckGroup = styled.div`
  display: flex;
  align-items: center;

  gap: 2.78vw;

  ${media.mobile} {
    gap: 10.67vw;
  }
`

const Error = styled(ErrorSVG)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: ${props => props.transform};

  width: 1.67vw;
  height: 1.67vw;

  ${media.mobile} {
    width: 6.4vw;
    height: 6.4vw;
  }
`

const State = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #C78E98;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  padding: 2.78vw 3.47vw;

  ${media.mobile} {
    padding: 8vw 5.33vw;
  }
`

const StateTwo = styled(State)`
  z-index: 1;
  opacity: 0;
`

const Title = styled.h2`
  position: absolute;
  ${text.desktop.h6}
  color: ${colors.roseIvory};
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);

  top: 4.17vw;
  width: 37.67vw;

  ${media.mobile} {
    top: 10.67vw;
    width: 84.8vw;
    ${text.mobile.h6}
  }
`

const Diamond = styled.img`
  position: absolute;
  z-index: 1;

  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${media.mobile} {
    width: 90%;
  }
`

const Cloud = styled.img`
  position: absolute;
  z-index: 2;
`

const Cloud1 = styled(Cloud)`
  transform: rotate(180deg);

  left: -10.9vw;
  bottom: -1.67vw;
  width: 37.29vw;
  height: 21.32vw;

  ${media.mobile} {
    width: 107.4vw;
    height: 61.4vw;
    left: -50.03vw;
    bottom: -18.83vw;
  }
`

const Cloud2 = styled(Cloud)`
  transform: rotate(180deg);

  width: 37.29vw;
  height: 21.32vw;
  bottom: 7.99vw;
  right: -9.03vw;

  ${media.mobile} {
    width: 107.4vw;
    height: 61.4vw;
    right: 50.3vw;
    bottom: -8.97vw;
  }
`

const Cloud3 = styled(Cloud)`
  transform: rotate(180deg);

  width: 58.26vw;
  height: 33.26vw;
  bottom: -1.81vw;
  left: -6.04vw;

  ${media.mobile} {
    width: 167.8vw;
    height: 95.8vw;
    bottom: 19.23vw;
    left: 36.03vw;
  }
`
