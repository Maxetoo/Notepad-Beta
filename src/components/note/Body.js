import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { timeMoment } from '../../slices/timeFeature'
import {
  titleChange,
  noteChange,
  fetchTime,
  createNote,
} from '../../slices/eventSlice'
const Body = () => {
  const { titleInput, noteInput, currentTime } = useSelector(
    (store) => store.note
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTime())
  }, [])

  return (
    <Wrapper>
      <div className='note-body'>
        <p>{timeMoment(currentTime)}</p>
        <input
          type='text'
          placeholder='Title'
          value={titleInput}
          onChange={(e) => dispatch(titleChange(e.target.value))}
        />
        <textarea
          placeholder='Note something here'
          draggable='false'
          value={noteInput}
          onChange={(e) => dispatch(noteChange(e.target.value))}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .note-body {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    width: 100%;
  }

  input {
    background: var(--main-bg);
    color: var(--white-color);
    height: 70px;
    width: 100%;
    border: none;
    margin-top: 1rem;
    outline: none;
    font-size: 1.4em;
    font-family: 'Varela Round', sans-serif;
  }

  input::placeholder {
    font-size: 1em;
  }

  textarea {
    background: var(--main-bg);
    color: var(--white-color);
    width: 100%;
    min-height: 200px;
    outline: none;
    border: none;
    margin-top: 1.5rem;
    font-size: 1.2em;
    resize: none;
    word-spacing: normal;
    line-height: 1.5em;
    font-family: 'Varela Round', sans-serif;
  }

  textarea::placeholder {
    font-size: 1em;
  }
`

export default Body
