import { createSlice } from '@reduxjs/toolkit'

export const clubsSlice = createSlice({
  name: "clubs",
  initialState: {
    clubs: [],
    loading: false,
    error: null
  },
  reducers: {
    getClubsStart(state) {
      state.loading = true
    },
    getClubsSuccess(state, action) {
      state.clubs = action.payload
      state.loading = false

    },
    getClubsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const clubsReducer = clubsSlice.reducer
export const { getClubsSuccess, getClubsFailure, getClubsStart } = clubsSlice.actions;