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
      const cheack_employees = current(state)
      const employees = []
      let employee_payload = action.payload
      //cheack if we already have some data in the state
      if (cheack_employees.employee === undefined) {
        //if no , we push our payload in employees and save employee in the state
        employees.push(employee_payload)
        state.employee = employees
      } else {
        //if yes , we will push each array employee of the state in employees , our payload and then save employees in our state
        let anc_employees = current(state).employee
        for (let index = 0; index < anc_employees.length; index++) {
          employees.push(anc_employees[index])
        }

        employees.push(employee_payload)
        state.employee = employees
      }
    })
  },
})
export default authSlice.reducer
