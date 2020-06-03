import React from "react";
import "./IdCard.css"

    
    const IdCard = props => {
        return (
          <div className = "Id">
          <img src={props.picture} alt="portrait"></img>
           <ul>
               <li>Last name: {props.lastName}</li>
               <li>First name: {props.firstName}</li>
               <li>Gender: {props.gender}</li>
               <li>Height: {props.height} cm</li>
               <li>Birth: {String(props.birth)}</li>
           </ul>
        
          </div>
        );
      };



export default IdCard;