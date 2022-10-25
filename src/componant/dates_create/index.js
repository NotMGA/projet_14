import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
//componante for the date imported from a librery
import 'react-datepicker/dist/react-datepicker.css'
function Date(props) {
  const [startDate, setStartDate] = useState(null)
  return (
    <div className="both">
      <label htmlFor={props.date}>{props.txt}</label>

      <DatePicker
        className="input_form"
        id={props.date}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date)
        }}
      />
    </div>
  )
}
export default Date
