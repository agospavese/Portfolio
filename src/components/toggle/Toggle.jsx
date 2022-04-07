import "./toggle.css"
import Sun from "../../img/Sun.png"
import Moon from "../../img/Moon.png"
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
  }
  return ( 
        <div className="toggle">
       <img src={Sun} alt="" className="toggle-img" />
       <img src={Moon} alt="" className="toggle-img" />
       <div className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
       </div>
     );
}

export default Toggle;