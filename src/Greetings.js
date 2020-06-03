import React from "react";
import "./IdCard.css"

    
    const Greetings = props => {
      let greet =""
      if (props.lang === "en"){
        greet = "Hi"
      } if (props.lang === "fr"){
        greet = "Bonjour"
      }
        return (
         <div>
           {greet}, {props.children}
         </div>
        );
      };



export default Greetings;