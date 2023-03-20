import { configureStore } from '@reduxjs/toolkit'
import { clubsSlice } from '../reducers/clubs'

export default configureStore({
  reducer: clubsSlice,
})
