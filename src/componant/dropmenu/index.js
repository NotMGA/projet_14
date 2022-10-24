import Select from 'react-select'
import states from '../../extras/data'
import '../../styles/creat_employe/index.css'
function Dropmenu(props) {
  // let options = []
  // for (let i = 0; i < states.length; i++) {
  //   options.push({ label: states[i].label, value: states[i].label })
  // }

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
