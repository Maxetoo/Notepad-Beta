import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RiSearch2Line } from 'react-icons/ri'
import { FaAngleLeft } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { searchEvent, clearSearch, searchSubmit } from '../../slices/eventSlice'

const Header = () => {
  const { searchInput, showClearSearch } = useSelector((store) => store.note)
  const dispatch = useDispatch()
  const [isScrollTop, setIsScrollTop] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsScrollTop(true)
      } else {
        setIsScrollTop(false)
      }
    })
  }, [isScrollTop])
  return (
    <Wrapper>
      <div className={`search-header ${isScrollTop && 'add-tint'}`}>
        <Link to='/'>
          <div className='icon-nav-home'>
            <FaAngleLeft />
          </div>
        </Link>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(searchSubmit())
          }}
        >
          <RiSearch2Line className='icon' />
          <input
            type='input'
            placeholder='Search notes'
            value={searchInput}
            onChange={(e) => dispatch(searchEvent(e.target.value))}
          />
          {showClearSearch && (
            <IoMdClose
              className='icon'
              onClick={() => dispatch(clearSearch())}
            />
          )}
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .search-header {
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
    transition: 0.5s all;
  }

  .add-tint {
    background: #1e1d1d;
    padding-bottom: 4rem;
  }

  .icon-nav-home {
    height: 100%;
    width: auto;
    background: var(--highlight);
    font-size: x-large;
    color: var(--icon-color);
    display: grid;
    place-content: center;
    padding: 0.65rem;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
  }

  form {
    width: 100vw;
    height: 100%;
    margin-left: 1.5rem;
    background: var(--highlight);
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    padding: 1.5rem;
  }

  input {
    margin: 0 1rem 0 1rem;
    width: 100%;
    height: auto;
    background: var(--highlight);
    color: var(--white-color);
    border: none;
    outline: none;
  }
  input::placeholder {
    color: var(--icon-color);
  }

  .icon {
    font-size: x-large;
    cursor: pointer;
  }
`

export default Header
