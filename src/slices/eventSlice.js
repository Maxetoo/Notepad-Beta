import { createSlice } from '@reduxjs/toolkit'

const setLocalStorage = () => {
  const localStore = localStorage.getItem('createNote')
  if (localStore) {
    return JSON.parse(localStorage.getItem('createNote'))
  } else {
    return []
  }
}

const setColorIndex = () => {
  const storeColorIndex = localStorage.getItem('colorIndex')
  if (storeColorIndex) {
    return +localStorage.getItem('colorIndex')
  } else {
    return 0
  }
}

const initialState = {
  titleInput: '',
  noteInput: '',
  searchInput: '',
  currentTime: '',
  isEditing: false,
  showClearSearch: false,
  editId: '',
  currentColor: {
    colorIndex: setColorIndex(),
    colorName: '',
  },
  createdNotes: setLocalStorage(),
  filteredNotes: [],
  showDeleteBtn: false,
  deleteModal: false,
  searchHistory: [],
}

const eventSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    fetchTime: (state) => {
      state.currentTime = new Date().getTime()
    },
    titleChange: (state, action) => {
      state.titleInput = action.payload
    },
    noteChange: (state, action) => {
      state.noteInput = action.payload
    },
    selectColor: (state, action) => {
      let colors = action.payload
      if (state.createdNotes.length === 0) {
        state.currentColor.colorIndex = 0
      } else {
        if (state.currentColor.colorIndex === colors.length - 1) {
          state.currentColor.colorIndex = 0
        } else {
          state.currentColor.colorIndex = state.currentColor.colorIndex + 1
        }
      }
      state.currentColor.colorName = colors[state.currentColor.colorIndex]
    },
    createNote: (state, action) => {
      let inputTitle = state.titleInput
      let inputNote = state.noteInput
      let userIsEditing = state.isEditing
      const noteInfo = {
        id: new Date().getTime(),
        time: new Date().getTime(),
        title: state.titleInput,
        note: state.noteInput,
        bgColor: state.currentColor.colorName,
      }
      if ((inputTitle || inputNote) && !userIsEditing) {
        state.createdNotes = [...state.createdNotes, noteInfo]
        state.titleInput = ''
        state.noteInput = ''
        state.isEditing = false
      } else if ((inputTitle || inputNote) && userIsEditing) {
        state.createdNotes = state.createdNotes.map((value) => {
          if (value.id === state.editId) {
            return {
              ...value,
              time: new Date().getTime(),
              title: state.titleInput,
              note: state.noteInput,
            }
          }
          return value
        })
        state.isEditing = false
        state.editId = ''
        state.titleInput = ''
        state.noteInput = ''
      }
    },
    editNote: (state, action) => {
      state.isEditing = true
      state.editId = action.payload
      const findNote = state.createdNotes.find(
        (value) => value.id === action.payload
      )
      const { title, note } = findNote
      state.titleInput = title
      state.noteInput = note
    },
    showBtn: (state) => {
      state.showDeleteBtn = true
    },
    hideBtn: (state) => {
      state.showDeleteBtn = false
    },
    deleteNote: (state, action) => {
      state.createdNotes = state.createdNotes.filter(
        (value) => value.id !== action.payload
      )
    },
    showDeleteModal: (state) => {
      state.deleteModal = true
    },
    hideDeleteModal: (state) => {
      state.deleteModal = false
    },
    searchEvent: (state, action) => {
      state.searchInput = action.payload
      if (state.searchInput) {
        state.showClearSearch = true
      } else {
        state.showClearSearch = false
      }

      if (state.searchInput) {
        state.filteredNotes = state.createdNotes.filter((value) => {
          return (
            value.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            value.note.toLowerCase().includes(action.payload.toLowerCase())
          )
        })
      } else {
        state.filteredNotes = []
      }
    },
    loadFilter: (state) => {
      if (!state.searchInput) {
        state.filteredNotes = []
      }
    },
    clearSearch: (state) => {
      state.searchInput = ''
      state.showClearSearch = false
    },
    searchSubmit: (state) => {
      const historyList = {
        id: `hiid${new Date().getTime()}`,
        name: state.searchInput,
      }
      if (state.searchInput) {
        state.searchHistory = [...state.searchHistory, historyList]
      }
    },
    clearSearchHistory: (state) => {
      state.searchHistory = []
    },
    removeSearchList: (state, action) => {
      state.searchHistory = state.searchHistory.filter(
        (value) => value.id !== action.payload
      )
    },
    getLocalStorage: (state) => {
      localStorage.setItem('createNote', JSON.stringify(state.createdNotes))
    },
    getColorIndex: (state) => {
      localStorage.setItem('colorIndex', state.currentColor.colorIndex)
    },
  },
})

export default eventSlice.reducer
export const {
  titleChange,
  noteChange,
  fetchTime,
  createNote,
  selectColor,
  editNote,
  showBtn,
  hideBtn,
  deleteNote,
  searchEvent,
  clearSearch,
  showDeleteModal,
  hideDeleteModal,
  searchSubmit,
  clearSearchHistory,
  removeSearchList,
  loadFilter,
  getLocalStorage,
  getColorIndex,
} = eventSlice.actions
