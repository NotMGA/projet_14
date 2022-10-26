//function to sort all data from the form in a array and return them
const Savedata = (e) => {
  const firstName = e.info_user.firstName
  const lastName = e.info_user.lastName
  const dateOfBirth = e.info_user.dateOfBirth
  const startDate = e.info_user.startDate
  const department = e.info_user.department
  const street = e.info_user.street
  const city = e.info_user.city
  const state = e.info_user.state
  const zipCode = e.info_user.zipCode

  const employee = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    startDate: startDate,
    department: department,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
  }

  return employee
}
export default Savedata
