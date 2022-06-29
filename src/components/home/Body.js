import React from 'react'
import styled from 'styled-components'
import NoteList from './NoteList'
import { useDispatch, useSelector } from 'react-redux'
// MdEditNote
import { MdEditNote } from 'react-icons/md'
const Body = () => {
  const { createdNotes } = useSelector((store) => store.note)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='home-body'>
        {createdNotes.length === 0 ? (
          <article className='empty-note'>
            <span className='note-empty-icon'>
              <MdEditNote />
            </span>
            <p className='empty-info'>
              Your note is currently empty. Click to add notes
            </p>
          </article>
        ) : (
          createdNotes.map((value) => {
            return <NoteList {...value} key={value.id} />
          })
        )}
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

  .empty-note {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .note-empty-icon {
    font-size: 9em;
    opacity: 0.8;
  }

  .empty-info {
    font-size: 1.1em;
    width: 70%;
    margin-top: -1rem;
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
