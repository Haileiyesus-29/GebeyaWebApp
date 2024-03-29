import { createSlice } from '@reduxjs/toolkit'
import api from '../../services/api'
import { resetWishlist } from '../wishlists/wishlistSlice'
import { resetCart } from '../cart/cartSlice'

const initialState = {
   account: null,
   loading: false,
   error: null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      signup: (state, action) => {
         state.account = action.payload
      },
      login: (state, action) => {
         state.account = action.payload
      },
      update: (state, action) => {
         state.account = action.payload
      },
      logout: state => {
         state.account = null
      },
      setLoading: (state, action) => {
         state.loading = action.payload
      },
      setError: (state, action) => {
         state.error = action.payload
      },
   },
})

export const { signup, login, update, logout, setLoading, setError } =
   authSlice.actions

export default authSlice.reducer

export function authenticate() {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.get('auth')
         dispatch(login(response.account))
      } catch (error) {
         console.error(error)
      } finally {
         dispatch(setLoading(false))
      }
   }
}

export function loginUser(credential, cb) {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.post('auth/login', credential)
         dispatch(login(response.account))
         cb?.()
      } catch (error) {
         dispatch(setError(error.message))
      } finally {
         dispatch(setLoading(false))
      }
   }
}

export function logoutUser() {
   return async dispatch => {
      await api.get('auth/logout')
      dispatch(logout())
      dispatch(resetCart())
      dispatch(resetWishlist())
   }
}

export function signupUser(credential, cb) {
   return async dispatch => {
      try {
         dispatch(setLoading(true))
         const response = await api.post('user/create', credential)
         dispatch(signup(response.account))
         cb?.()
      } catch (error) {
         dispatch(setError(error.message))
      } finally {
         dispatch(setLoading(false))
      }
   }
}
