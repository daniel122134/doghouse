
const Icon = (props) => {
  return (
    <div className={"icon" + (props.className == null ? "" : " " + props.className)}>
      <i className={props.icon}></i>
    </div>
  )
}

export default Icon
