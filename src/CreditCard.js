import React from "react";
import CreditCardStyle from './CreditCard.css'

    
    const CreditCard = (props) => {
        let myStyle = {color: `${props.color}`}
        return (
          <div className='creditCard'
          style= {{color: props.color}} 
          type = {props.type} 
          number = {props.number} 
          expirationMonth ={props.expirationMonth}
          expirationYear={props.expirationsYear}
          bank={props.bank}
          owner={props.owner}
          bgColor={props.bgColor}>
         <p id='type'> {props.type}</p>
         <p id='number'> {props.number}</p>
        <p id='month'> {props.expirationMonth} / {props.expirationYear}</p>
         <p> {props.bank}</p>
         <p> {props.owner}</p>
          </div>
        );
      };



export default CreditCard;  

