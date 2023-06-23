import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@redux/slices/auth'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'

const reducer = {
  auth: authReducer
}

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store