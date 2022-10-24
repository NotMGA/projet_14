import { useSelector } from 'react-redux'

const Savedata = (e) => {
  console.log(e.info_user.department)
  const firstName = e.info_user.firstName
  const lastName = e.info_user.lastName
  const dateOfBirth = document.getElementById('dateOfBirth')
  const startDate = document.getElementById('startDate')
  const department = e.info_user.department
  const street = e.info_user.street
  const city = e.info_user.city
  const state = e.info_user.state
  const zipCode = e.info_user.zipCode

  const employee = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth.value,
    startDate: startDate.value,
    department: department,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
  }

  return employee
}
export default Savedata
