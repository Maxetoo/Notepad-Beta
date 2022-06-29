import React from 'react'
import styled from 'styled-components'
import { HiPlus } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const AddIcon = () => {
  return (
    <Wrapper>
      <Link to='/note'>
        <div className='add-icon-container'>
          <HiPlus />
        </div>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .add-icon-container {
    display: grid;
    place-content: center;
    background: #ffc0ad;
    color: #000000;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    position: fixed;
    z-index: 100;
    top: 70%;
    right: 10%;
    font-size: x-large;
    cursor: pointer;
  }
`

export default AddIcon
