import React from 'react'
import { useSelector } from 'react-redux'
import SortableTbl from 'react-sort-search-table'
// let data = JSON.parse(localStorage.getItem('employees'))
const Liste = (props) => {
  const datas = useSelector((state) => state.data.employee)
  let col = [
    'firstName',
    'lastName',
    'startDate',
    'department',
    'dateOfBirth',
    'street',
    'city',
    'state',
    'zipCode',
  ]
  let tHead = [
    'First Name',
    'Last Name',
    'Start Date',
    'Departement',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]
  // const info = JSON.parse(localStorage.getItem('employees'))
  // console.log(datas)
  // console.log(data)
  return <SortableTbl tblData={datas} tHead={tHead} dKey={col} />
}

Liste.propTypes = {}

export default Liste
// render(<ProductsTblPage />, document.getElementById("root"));
