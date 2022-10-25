import Date from '../../componant/dates_create'
import Dropmenu from '../../componant/dropmenu'
import Header from '../../componant/header'
import Names from '../../componant/name_create'
import states, { options2 } from '../../extras/data'
import '../../styles/creat_employe/index.css'
import { basketSlice } from '../../redux/reducer'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Modalcomp from 'modal_react_oc_mf'
let options1 = []

//get the states and the abbreviation of the state
for (let i = 0; i < states.length; i++) {
  options1.push({ label: states[i].label, value: states[i].abbreviation })
}
function Create() {
  //this const will be update onchange to get the value
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
  //on change for the label and get the value
  function onChange_txt(value) {
    get_info_user({
      ...info_user,
      [value.target.id]: value.target.value,
    })
  }

  const dispatch = useDispatch()
  //onchange for the input and get the value
  function onChangeinput1(value) {
    get_info_user({
      ...info_user,
      state: value.value,
    })
  }
  function onChangeinput2(value) {
    get_info_user({
      ...info_user,
      department: value.value,
    })
  }
  //function on click to submit the form
  function onClick(e) {
    //disable the refresh
    e.preventDefault()
    //send the data of the form to the function who will save them in the global state
    dispatch(basketSlice({ info_user }))
    //open the modal "employee create " and modified the opacity of the form
    const visibility = document.getElementsByClassName('modal_display')
    const container = document.getElementsByClassName('container')[2]
    container.style.opacity = '0.2'
    visibility[0].style.display = 'flex'
    e.target.reset()
  }
  //function to close the modal and rest the opacity
  function action_close() {
    const visibility = document.getElementsByClassName('modal_display')
    const container = document.getElementsByClassName('container')[2]
    visibility[0].style.display = 'none'
    container.style.opacity = '1'
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
        <Modalcomp actionclose={action_close}></Modalcomp>
      </div>

      <div className="container">
        <h1>Create Employee</h1>

        <form action="#" id="create-employee" onSubmit={onClick}>
          <Names name="firstName" txt="First Name" onChange={onChange_txt} />
          <Names name="lastName" txt="Last Name" onChange={onChange_txt} />
          <Date date="dateOfBirth" txt="Date of Birth" />
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
          <button type="submit" className="btn">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
export default Create
