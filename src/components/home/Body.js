import React from 'react'
import styled from 'styled-components'
import NoteList from './NoteList'
import { useDispatch, useSelector } from 'react-redux'

const Body = () => {
  const { createdNotes } = useSelector((store) => store.note)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='home-body'>
        {createdNotes.map((value) => {
          return <NoteList {...value} key={value.id} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .home-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 6rem;
    padding: 2rem;
    overflow: hidden;
  }

  a {
    width: 100%;
  }

  .note-list {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    cursor: pointer;
    color: #000000;
  }

  h3 {
    margin-bottom: 0.35rem;
  }

  p {
    opacity: 0.8;
    font-size: 0.8em;
  }
`

export default Body
