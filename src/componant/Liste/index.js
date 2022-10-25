import React from 'react'
import { useSelector } from 'react-redux'
import SortableTbl from 'react-sort-search-table'
//componante to liste all the data in the page liste_employee
//composant imported from a librery
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
  return <SortableTbl tblData={datas} tHead={tHead} dKey={col} />
}

Liste.propTypes = {}

export default Liste
