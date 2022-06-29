import React from 'react'
import { Header, AddIcon, Body } from '../components/home'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <AddIcon />
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

export default Home
