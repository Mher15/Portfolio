import React ,{ Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import programingfoto1 from "../Components/image/programing/programingcarusel1.jpg";
import programingfoto2 from "../Components/image/programing/programingcarusel2.jpg";
import programingfoto3 from "../Components/image/programing/programingcarusel3.jpg";
import programingfoto4 from "../Components/image/programing/programingcarusel4.jpg";


export default class CaruselBox extends Component {
    render(){
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            className ="d-block w-100"
                            src ={programingfoto1}
                            alt ="Forest"
                        />
                        <Carousel.Caption >
                            <h3>Name Text</h3>
                            <p>lorem text for 10 years lorem text for 10 years lorem text for 10 years</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img 
                            className ="d-block w-100 "
                            src ={programingfoto2}
                            alt ="Forest"
                        />
                        <Carousel.Caption >
                            <h3>Name Text</h3>
                            <p>lorem text for 10 years lorem text for 10 years lorem text for 10 years</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className ="d-block w-100"
                            src ={programingfoto3}
                            alt ="Forest"
                        />
                        <Carousel.Caption >
                            <h3>Name Text</h3>
                            <p>lorem text for 10 years lorem text for 10 years lorem text for 10 years</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img 
                            className ="d-block w-100 "
                            src ={programingfoto4}
                            alt ="Forest"
                        />
                        <Carousel.Caption >
                            <h3>Name Text</h3>
                            <p>lorem text for 10 years lorem text for 10 years lorem text for 10 years</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}