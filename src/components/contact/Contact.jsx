import "./contact.css"
import Email from "../../img/mail.png"
import Tel from "../../img/tel.png"
import CVimg from "../../img/CVimg.png"
import In from "../../img/in.png"
import { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { ThemeContext } from "../../context"
import Cv from "../../docs/CV.pdf"


function Contact() {
    const formRef = useRef()
    const [done , setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_elbyubl', 'template_bu7ct7y', formRef.current, 'n8xrpYcIJpsNGb-u3')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return ( 
        <div className="contact">
           <div className="contact-bg"></div>
           <div className="contact-wrapper">
               <div className="contact-left">
                   <h1 className="contact-title">Contactame</h1>
                   <div className="contact-info">
                       <div className="contact-info-item">
                           <img  src={Tel} alt="" className="contact-icon" />
                           +54 9 1138051324
                           </div>
                           <div className="contact-info-item">
                           <img  src={Email} alt="" className="contact-icon" />
                           agostinap85@gmail.com
                           </div>
                           <div className="contact-info-item">
                           <img  src={In} alt="" className="contact-icon" />
                          <a href="https://www.linkedin.com/in/maria-agostina-pavese/" id="contact-icon-in">Ver LinkedIn</a>
                           </div>
                           <div className="contact-info-item">
                               <img src={CVimg} alt="" className="contact-icon" />
                               <a href={Cv} download="" className="contact-icon-cv">
                                   Descargar CV
                               </a>
                           </div>
                           
                        </div>
                   </div>
               <div className="contact-right">
                   <p className="contact-desc">
                       <b>
                        ¿Cuál es tu historia?
                       </b> Contame sobre tu proyecto
                   </p>
                   <form ref={formRef} onSubmit={handleSubmit}>
                       <input style={{backgroundColor:darkMode && "#999" }} type="text" placeholder="Nombre" name="user_name"/>
                       <input style={{backgroundColor:darkMode && "#999"}} type="text" placeholder="Asunto" name="user_subject"/>
                       <input  style={{backgroundColor:darkMode && "#999"}} type="text" placeholder="Email" name="user_email"/>
                       <textarea  style={{backgroundColor:darkMode && "#999"}}  rows="5" placeholder="Mensaje" name="message"/>
                       <button>Enviar</button>
                       {done && " Gracias por comunicarte, te responderé a la brevedad"}                       
                   </form>
                   </div>
               </div>
      
        </div>
     );
}

export default Contact;