import '../../styles/creat_employe/index.css'
//composant for the label input
function names(props) {
  return (
    <div className="both">
      <label htmlFor={props.name}>{props.txt}</label>
      <input
        className="input_form"
        type="text"
        id={props.name}
        onChange={props.onChange}
      />
    </div>
  )
}
export default names
