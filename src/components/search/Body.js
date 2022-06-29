import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from 'react-icons/fa'
import { clearSearchHistory, removeSearchList } from '../../slices/eventSlice'
import NoteList from './NoteList'
const Body = () => {
  const { searchHistory, searchInput, filteredNotes } = useSelector(
    (store) => store.note
  )
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='search-body'>
        {!searchInput && (
          <div className='search-history-container'>
            {searchHistory.map((value) => {
              const { name, id } = value
              return (
                <div className='history-list' key={id}>
                  <p>{name}</p>
                  <span
                    onClick={() => {
                      dispatch(removeSearchList(id))
                    }}
                  >
                    <FaTimes />
                  </span>
                </div>
              )
            })}
            {searchHistory.length !== 0 && (
              <h4
                onClick={() => {
                  dispatch(clearSearchHistory())
                }}
              >
                Clear History
              </h4>
            )}
          </div>
        )}
        <div className='search-list-container'>
          {filteredNotes.map((value) => {
            return <NoteList {...value} key={value.id} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .search-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 6rem;
    padding: 2rem;
    overflow: hidden;
  }

  .search-history-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .history-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    color: var(--white-color);
    padding: 0 1rem 0 1rem;
  }

  span {
    cursor: pointer;
  }

  h4 {
    margin-top: 0.5rem;
    color: #d40b0b;
    cursor: pointer;
  }

  .search-list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
