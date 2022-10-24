import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Savedata from '../../extras/save_data'
import { useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit'

const initialState = { data: null }

// create action to save employees in the store

export const basketSlice = createAsyncThunk(
  'data/employee',
  (data, thunkAPI) => {
    try {
      console.log(data)
      let test = Savedata(data)

      return test
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue()
    }
  }
)

export const employee_list = createAsyncThunk(
  'data/employees',
  (data, thunkAPI) => {
    try {
    } catch (error) {}
  }
)

export const authSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // add new employee in the store
    builder.addCase(basketSlice.fulfilled, (state, action) => {
      const empty = current(state)
      const employees = []
      let amployee = action.payload
      if (empty.employee === undefined) {
        employees.push(amployee)
        state.employee = employees
      } else {
        let anc_employees = current(state).employee
        for (let index = 0; index < anc_employees.length; index++) {
          employees.push(anc_employees[index])
        }

        employees.push(amployee)
        state.employee = employees
      }
    })
  },
})
export default authSlice.reducer
