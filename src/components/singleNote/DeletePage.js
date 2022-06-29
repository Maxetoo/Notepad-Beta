import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { hideDeleteModal, deleteNote, hideBtn } from '../../slices/eventSlice'
const DeletePage = () => {
  const { id } = useParams()
  const { deleteModal, createdNotes } = useSelector((store) => store.note)
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [noteDetails, setNoteDetails] = useState([])
  useEffect(() => {
    const findNote = createdNotes.find((value) => value.id === +id)
    setNoteDetails(findNote)
  }, [id])
  return (
    <Wrapper>
      {deleteModal && (
        <div
          className='delete-page'
          onClick={() => {
            dispatch(hideDeleteModal())
            dispatch(hideBtn())
          }}
        >
          <div className='delete-modal'>
            <h4>Delete note</h4>
            <p>Are you sure you want to delete this note?</p>
            <div className='btn-container'>
              <button
                type='button'
                className='cancel'
                onClick={() => {
                  dispatch(hideDeleteModal())
                  dispatch(hideBtn())
                }}
              >
                CANCEL
              </button>
              <button
                type='button'
                className='delete'
                onClick={() => {
                  dispatch(deleteNote(noteDetails.id))
                  navigate('/')
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .delete-page {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #1e1d1d;
    top: 0;
    z-index: 200;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 2rem;
  }

  .delete-modal {
    width: 100%;
    height: 180px;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 5px;
    background: var(--highlight);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h4 {
    margin-top: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    opacity: 0.8;
  }

  .btn-container {
    margin-top: 1rem;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem 1rem 1rem;
    border-top: solid 1px black;
  }
  button {
    border: none;
    background: none;
    font-size: 1em;
    cursor: pointer;
    font-weight: bold;
  }

  .cancel {
    color: var(--white-color);
    opacity: 0.8;
  }

  .delete {
    color: red;
  }
`

export default DeletePage
