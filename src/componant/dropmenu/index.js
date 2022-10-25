import Select from 'react-select'
//componante for the dropmenu imported from a librery
import '../../styles/creat_employe/index.css'
function Dropmenu(props) {
  return (
    <div className="both">
      <label htmlFor={props.id}>{props.txt}</label>

      <Select
        className="test "
        id={props.id}
        options={props.options}
        onChange={props.onChange}
      />
    </div>
  )
}
export default Dropmenu
