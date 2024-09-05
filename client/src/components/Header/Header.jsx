import Dropdown from "../UI/Dropdown"
const Header = () => {
  return (
    <div style={
      {backgroundColor: "black",
       color: "white",
        minHeight: "280px",
        display: "flex"}}>
       Header
       <Dropdown/> 
    </div>
  )
}

export default Header;