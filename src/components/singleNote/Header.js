import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { FaAngleLeft } from 'react-icons/fa'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'
import { showBtn, hideBtn, showDeleteModal } from '../../slices/eventSlice'

const Header = () => {
  const { id } = useParams()
  const { createdNotes, showDeleteBtn } = useSelector((store) => store.note)
  const headerDispatch = useDispatch()
  const [noteHeadDetails, setNoteHeadDetails] = useState([])
  useEffect(() => {
    const findNote = createdNotes.find((value) => value.id === +id)
    setNoteHeadDetails(findNote)
  }, [id])
  const { title, note } = noteHeadDetails
  const shareNote = () => {
    window.navigator
      .share({
        url: window.location,
        title: title,
        text: note,
      })
      .then(() => console.log('success'))
      .catch(() => 'Error')
  }

  return (
    <Wrapper>
      <div className='single-note-header'>
        <Link to='/'>
          <div
            className='icon-nav-home'
            onClick={() => headerDispatch(hideBtn())}
          >
            <FaAngleLeft />
          </div>
        </Link>
        <div className='options-container'>
          <AiOutlineShareAlt onClick={shareNote} className='icon share' />
          <HiOutlineDotsVertical
            onClick={() => {
              if (showDeleteBtn) {
                headerDispatch(hideBtn())
              } else {
                headerDispatch(showBtn())
              }
            }}
            className='icon dots'
          />
          {showDeleteBtn && (
            <span
              className='delete-btn'
              onClick={() => {
                headerDispatch(showDeleteModal())
              }}
            >
              Delete
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .single-note-header {
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    padding-top: 3.5rem;
    position: fixed;
    top: 0;
    z-index: 100;
  }

  a > .icon-nav-home {
    height: 100%;
    width: auto;
    background: var(--highlight);
    font-size: x-large;
    color: var(--icon-color);
    display: grid;
    place-content: center;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
  }

  .options-container {
    color: var(--icon-color);
    padding: 0.5rem;
    font-size: x-large;
    cursor: pointer;
    user-select: none;
  }

  .share {
    margin-right: 1.5rem;
  }

  .dots {
    position: relative;
  }

  .delete-btn {
    position: absolute;
    background: var(--highlight);
    font-size: medium;
    bottom: -30%;
    right: 5%;
    width: 150px;
    padding: 0.6rem;
    border-radius: 5px;
    font-weight: 700;
  }

  .icon {
    font-size: 1.2em;
  }
`

export default Header
