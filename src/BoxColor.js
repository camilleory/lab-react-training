import React from "react";

    
    const BoxColor = (props) => {
        return (
          <div style= {{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <p style={{color: 'white'}, {height: 100}}>BoxColor, rgb({props.r}, {props.g}, {props.b})</p>
          </div>
        );
      };



export default BoxColor;

