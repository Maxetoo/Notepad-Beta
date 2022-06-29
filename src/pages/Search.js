import React from 'react'
import { Header, Body } from '../components/search'
import styled from 'styled-components'
const Search = () => {
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

export default Search
