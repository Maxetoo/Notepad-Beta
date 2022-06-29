import React from 'react'
import { timeMoment } from '../../slices/timeFeature'
import { Link } from 'react-router-dom'

const NoteList = ({ id, title, note, bgColor, time }) => {
  return (
    <Link to={`/note/${id}`}>
      <div className='note-list' style={{ background: bgColor }}>
        <h3>
          {!title
            ? note.split('').slice(0, 14).join('')
            : title.split('').slice(0, 20).join('')}
        </h3>
        <p>{timeMoment(time)}</p>
      </div>
    </Link>
  )
}

export default NoteList
