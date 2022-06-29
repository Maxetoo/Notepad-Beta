import React from 'react'
import styled from 'styled-components'
import { Header, Body } from '../components/note'

const Note = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`

export default Note
