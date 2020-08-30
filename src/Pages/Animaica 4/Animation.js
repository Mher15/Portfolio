import React from "react";
import Particles from 'react-particles-js';

function Animation(props) {
    return (
        <div style={{
            backgroundColor: "black",
            height:"400px",
            opacity:"0.4",
        }}>
            <Particles 
           
            params={{
                "particles": {
                    "number": {
                        "value": 150
                    },
                    "size": {
                        "value": 1
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
        </div>
    );
}
export  default Animation