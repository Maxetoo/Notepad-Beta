import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RiSearch2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
// FaAngleLeft

const Header = () => {
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
      <div className={`home-header ${isScrollTop && 'add-tint'}`}>
        <h2>Notes</h2>
        <Link to='/search'>
          <div className='search-icon-container'>
            <RiSearch2Line />
          </div>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  .home-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 2rem;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000 !important;
    padding-top: 4rem;
    padding-bottom: 3rem;
    overflow: hidden;
    transition: 0.5s all;
  }

  .add-tint {
    background: #1e1d1d;
  }

  h2 {
    font-size: 1.8em;
  }
  a > .search-icon-container {
    height: 100%;
    width: auto;
    background: var(--highlight);
    font-size: x-large;
    color: var(--white-color);
    display: grid;
    place-content: center;
    padding: 0.65rem;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
  }
`

export default Header
