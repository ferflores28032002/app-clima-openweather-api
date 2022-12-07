import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: { },
  loading: false
}

export const ClimaSlice = createSlice({
  name: 'clima',
  initialState,
  reducers: {
    addElement: (state, { payload }) => {
      state.loading=false
      state.data=payload
    },
    setLoading: (state) => {
      state.loading=true
    },
    setLoadingFalse: (state) => {
      state.loading=false
    }
  },
})


export const { addElement, setLoading, setLoadingFalse } = ClimaSlice.actions