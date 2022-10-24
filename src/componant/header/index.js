function Header(props) {
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <a className="redirection" href={props.link_btn}>
        {props.title_btn}
      </a>
    </div>
  )
}
export default Header
