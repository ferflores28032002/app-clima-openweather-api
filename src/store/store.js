import { configureStore } from '@reduxjs/toolkit'
import { ClimaSlice } from './slices/ClimaSlice'

export const store = configureStore({
  reducer: {
    clima: ClimaSlice.reducer
  }
})