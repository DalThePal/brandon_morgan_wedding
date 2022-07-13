import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import colors from 'styles/colors'

import Label from 'components/formElements/Label'
import Input from 'components/formElements/Input'
import Checkbox from 'components/formElements/Checkbox'
import Button from 'components/formElements/Button'

import { ReactComponent as ErrorSVG } from 'images/error.svg'

const Form = () => {

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
    }).then((response) => { console.log(response); })
  }

  return (
    <Wrapper>
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
        {presentError && <Error/>}
        <CheckGroup>
          <Checkbox label="Yes" selected={present} setSelected={() => setPresent(true)}/>
          <Checkbox label="No" selected={present === false} setSelected={() => setPresent(false)}/>
        </CheckGroup>
      </Group>
      <Group >
        <Label>Will you be bringing a plus-one?</Label>
        {plusOneError && <Error/>}
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
        {busError && <Error/>}
        <CheckGroup>
          <Checkbox label="Yes" selected={bus} setSelected={() => setBus(true)}/>
          <Checkbox label="No" selected={bus === false} setSelected={() => setBus(false)}/>
        </CheckGroup>
      </Group>
      <Button disabled={false} onClick={submit}>Submit RSVP</Button>
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.div`
  position: relative;
  background-color: #C78E98;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${colors.roseIvory};

  width: 45.83vw;
  padding: 2.78vw 2.78vw 3.47vw;
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
`

const CheckGroup = styled.div`
  display: flex;
  align-items: center;

  gap: 2.78vw;
`

const Error = styled(ErrorSVG)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 1.67vw;
  height: 1.67vw;
`
