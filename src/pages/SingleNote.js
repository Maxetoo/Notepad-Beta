import React from 'react'
import styled from 'styled-components'
import { Header, Body, DeletePage } from '../components/singleNote'

const SingleNote = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
      <DeletePage />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`

export default SingleNote
