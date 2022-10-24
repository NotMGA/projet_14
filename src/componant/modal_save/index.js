import Close from '../../img/close.svg'
function Modal(props) {
  function action_close() {
    const visibility = document.getElementsByClassName('modal_display')
    visibility[0].style.display = 'none'
    console.log(visibility)
  }
  return (
    <div style={props.style_modal} className="modal_display">
      <div style={props.style_txt}>{props.modal_txt}</div>
      <button style={props.style_btn} onClick={action_close}>
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
    display: 'flex',

    borderRadius: '205px',
    border: '2px solid rgb(204, 51, 0)',
    justifyContent: 'center',
  },
  style_btn: {
    border: '0px solid',
    padding: '0px',
    right: ' -74px',
    top: '-8px',
    position: 'relative',
    height: '20px',
    borderRadius: '205px',
  },
  style_txt: { padding: '20px' },
  modal_txt: 'Employee create',
}
export default Modal
