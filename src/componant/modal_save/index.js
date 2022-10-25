import Close from '../../img/close.svg'
//this composant is not used in the app
//he is here to test it and uptated the librery i creat in a other folder
function Modal(props) {
  return (
    <div style={props.style_modal} className="modal_display">
      <div style={props.style_txt}>{props.modal_txt}</div>
      <button style={props.style_btn} onClick={props.actionclose}>
        <img style={props.style_img} src={Close} alt="croix"></img>
      </button>
    </div>
  )
}
Modal.defaultProps = {
  style_img: {
    width: 'auto',
    height: '20px',
    border: '0px solid',
    borderRadius: '205px',
  },
  style_modal: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    opacity: '1',
    zIndex: '1',
    borderRadius: '205px',
    background: 'white',
    border: '2px solid rgb(204, 51, 0)',
    justifyContent: 'center',
  },
  style_btn: {
    border: '0px solid',
    padding: '0px',

    position: 'relative',
    height: '20px',
    borderRadius: '205px',
  },
  style_txt: { padding: '20px' },
  modal_txt: 'Employee create',
}
export default Modal
