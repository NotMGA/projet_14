import Date from '../../componant/dates_create'
import Dropmenu from '../../componant/dropmenu'
import Header from '../../componant/header'
import Names from '../../componant/name_create'
import states, { options2 } from '../../extras/data'
import Savedata from '../../extras/save_data/index.js'
import '../../styles/creat_employe/index.css'
import { basketSlice } from '../../redux/reducer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import Modal from '../../componant/modal_save'
import { useState } from 'react'
import Modalcomp from 'modal_react_oc_mf'
let options1 = []
for (let i = 0; i < states.length; i++) {
  options1.push({ label: states[i].label, value: states[i].abbreviation })
}
function Create() {
  const [info_user, get_info_user] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  })

  function onChange_txt(value) {
    console.log(value.target.id)
    get_info_user({
      ...info_user,
      [value.target.id]: value.target.value,
    })
    console.log(info_user)
  }
  const { datas } = useSelector((state) => state.data)
  console.log(datas)
  let sta
  let dep
  const dispatch = useDispatch()
  // dispatch(basketSlice())
  function onChangeinput1(value) {
    // console.log(value)
    // sta = value.value
    get_info_user({
      ...info_user,
      state: value.value,
    })
  }
  function onChangeinput2(value) {
    // console.log(value)
    // dep = value.label
    get_info_user({
      ...info_user,
      department: value.value,
    })
  }
  function onClick() {
    // Savedata(sta, dep)
    dispatch(basketSlice({ info_user }))
  }
  function onchange_test() {
    console.log('dqsdqsdqsdqsdqsdqsd')
  }
  return (
    <div>
      <Header
        title="HRnet"
        link_btn="/liste"
        title_btn="lists of current employe
"
      />
      <div className="container">
        <h1>Create Employee</h1>
        <form action="#" id="create-employee">
          <Names name="firstName" txt="First Name" onChange={onChange_txt} />
          <Names name="lastName" txt="Last Name" onChange={onChange_txt} />
          <Date
            date="dateOfBirth"
            txt="Date of Birth"
            onchange={onchange_test}
          />
          <Date date="startDate" txt="Start Date" />
          <fieldset className="address">
            <legend>Address</legend>
            <Names name="street" txt="Street" onChange={onChange_txt} />
            <Names name="city" txt="City" onChange={onChange_txt} />
            <Dropmenu
              onChange={onChangeinput1}
              options={options1}
              id="state"
              txt="State"
            />
            <div className="both">
              <label htmlFor="zip-code">Zip Code</label>
              <input
                className="input_form"
                id="zipCode"
                type="number"
                onChange={onChange_txt}
              />
            </div>
          </fieldset>
          <Dropmenu
            onChange={onChangeinput2}
            options={options2}
            id="department"
            txt="Department"
          />
          <button className="btn" onClick={onClick}>
            Save
          </button>
          {/* <Modal></Modal> */}
          <Modalcomp></Modalcomp>
        </form>
      </div>
    </div>
  )
}
export default Create
