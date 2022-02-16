import {
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit'


// get user from localStorage

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  usuer: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoaded: false,
  message:''
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) =>{
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.messages = ''
    }
  },
  extraReducers: () => {}
})

export const {reset} = authSlice.actions
export default authSlice.reducer
