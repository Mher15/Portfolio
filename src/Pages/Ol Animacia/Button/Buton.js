import React, { Component } from "react" ;
import "./css/buton.css" 

function Buton (props) {
        return(
            <div className="ded_div">
                 <a className='buton' href="#"><span>{props.cnopca}</span></a>
            </div>
        )
    }
        export default Buton;