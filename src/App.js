import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  HomePage,
  NotePage,
  SingleNotePage,
  SearchPage,
  ErrorPage,
} from './pages'
import { Routes, Route, useLocation } from 'react-router-dom'
import {
  selectColor,
  hideBtn,
  loadFilter,
  getLocalStorage,
  getColorIndex,
  getHistoryStorage,
} from './slices/eventSlice'

function App() {
  const { createdNotes, searchInput, searchHistory } = useSelector(
    (store) => store.note
  )
  const dispatch = useDispatch()
  const pickColor = ['#ffab91', '#ffcc80', '#e8ed9b', '#d094da', '#82deeb']
  let location = useLocation().pathname
  useEffect(() => {
    dispatch(getLocalStorage())
  }, [createdNotes])

  useEffect(() => {
    dispatch(selectColor(pickColor))
  }, [createdNotes])

  useEffect(() => {
    dispatch(getColorIndex())
  }, [createdNotes])

  useEffect(() => {
    dispatch(getHistoryStorage())
  }, [searchHistory])

  useEffect(() => {
    if (location === '/') {
      dispatch(hideBtn())
    }
  }, [])

  useEffect(() => {
    dispatch(loadFilter())
  }, [searchInput])

  return (
    <React.Fragment>
      <main className='main-app'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/note' element={<NotePage />} />
          <Route path='/note/:id' element={<SingleNotePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
      <div className='not-availabe'>
        <h3>Opps!</h3>
        <p>Sorry, This is only available on small screen</p>
      </div>
    </React.Fragment>
  )
}

export default App
