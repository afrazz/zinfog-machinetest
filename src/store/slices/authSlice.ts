import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import authService from 'services/authServices';
import { saveToLocalStorage, getItemFromLocalStorage, removeItemFromLocalStorage } from 'utils/localstorage';

interface IState {
    loading: boolean;
    authPageLoading: boolean;
    token: string | null;
    user: any,
    error: string | null
}

export const initialState: IState = {
  loading: false,
  authPageLoading: false,
  token: getItemFromLocalStorage('token'),
  user: JSON.parse(getItemFromLocalStorage('user') || '{}'),
  error: null
}

// SIGNIN Action
export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({user_name, password}: {user_name: string, password: string}, { dispatch, rejectWithValue }) => {
    try {
      const userData = await authService.signIn(user_name, password);

      return userData
    } catch (err: any) {
      return rejectWithValue(err.message || 'Error')
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true
    },
    setAuthPageLoading: (state:IState, action: PayloadAction<boolean>) => {
        state.authPageLoading = action.payload    
    },
    signOut: (state) => {
      state.token = null
      state.user = null
      removeItemFromLocalStorage('token')
      removeItemFromLocalStorage('user')

      window.location.href = '/public/login'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state: IState) => {
        state.loading = true
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state: IState, action: any) => {
        console.log(action, 'yooo')
        state.loading = false
        state.error = null;

        state.token = action.payload.result.data.token
        state.user = action.payload.result.data
        saveToLocalStorage('token', action.payload.result.data.token)
        saveToLocalStorage('user', action.payload.result.data)
      })
      .addCase(signIn.rejected, (state:IState, action) => {
        state.loading = false
        const error = action.payload as string
        state.error = error
      })
  },
})

export const {
    showLoading,
    setAuthPageLoading,
    signOut
} = authSlice.actions

export default authSlice.reducer
