import "./about.css"
import Drum from "../../img/bateristafoto.jpg"

function About() {
   return (
      <div className="about">
         <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">

               <img src={Drum} alt="" className="about-img" />
            </div>
         </div>
         <div className="about-right">
            <h1 className="about-title">Sobre mí</h1>
            <p className="about-sub">
              Soy Web Developer, especializada en Front End. 
            </p>
            <p className="about-desc">
               Busco una empresa en la cual pueda seguir creciendo y desarrolando mis aptitudes,
                sin perder de vista mi esencia. Soy responsable, creativa y proactiva. Miro para adelante, siempre predispuesta al crecimiento.
            </p>
         </div>
      </div>

   );
}

export default About;