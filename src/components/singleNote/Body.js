import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { timeMoment } from '../../slices/timeFeature'
import { editNote, hideBtn } from '../../slices/eventSlice'
const Body = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  const { createdNotes } = useSelector((store) => store.note)
  const dispatch = useDispatch()
  const [noteDetails, setNoteDetails] = useState([])
  useEffect(() => {
    const findNote = createdNotes.find((value) => value.id === +id)
    setNoteDetails(findNote)
  }, [id])
  const { title, note, time } = noteDetails
  return (
    <Wrapper>
      <div className='note-body' onClick={() => dispatch(hideBtn())}>
        <p>{timeMoment(time)}</p>
        <input
          type='text'
          placeholder='Title'
          value={title}
          spellCheck='false'
          onClick={() => {
            dispatch(editNote(noteDetails.id))
            navigate('/note')
          }}
        />
        <textarea
          placeholder='Note something here'
          draggable='false'
          value={note}
          spellCheck='false'
          onClick={() => {
            dispatch(editNote(noteDetails.id))
            navigate('/note')
          }}
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
    height: auto;
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
