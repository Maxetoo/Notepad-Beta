import React from 'react'
import styled from 'styled-components'
import { FaAngleLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createNote } from '../../slices/eventSlice'
const Header = () => {
  const { editId, isEditing } = useSelector((store) => store.note)
  let navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='note-header'>
        <Link to='/'>
          <div className='icon-nav-home'>
            <FaAngleLeft />
          </div>
        </Link>
        <div
          className='save-container'
          onClick={() => {
            dispatch(createNote())
            if (isEditing) {
              navigate(`/note/${editId}`)
            } else {
              navigate('/')
            }
          }}
        >
          Save
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .note-header {
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
    margin-bottom: 1.5rem;
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

  .save-container {
    height: 100%;
    width: auto;
    background: var(--highlight);
    font-size: 1em;
    color: var(--white-color);
    display: grid;
    place-content: center;
    padding: 1.3rem;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
  }
`

export default Header
