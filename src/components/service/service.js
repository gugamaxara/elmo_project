import React from "react";

import "./service.css"
import "./mobile-service.css"

import ServiceImage from "../../image/service.png"

class Service extends React.Component{
    render(){
        return(
            <div className="service" id="service-page">
                <div className="serviceBackground">
                    <img alt="service background" src={ServiceImage}/>
                    <h1></h1>
                </div>
                
                <div className="serviceName">
                    <h1>სერვისები</h1>
                </div>
                <div className="mainServices">
                    <ul>
                        <li className="oneLineRectangle">ელექტროობის დაპროექტება</li>
                        <li className="twoLineRectangle">ელექტრო სამუშაოები <br/> (ბინა, კოტეჯი, ოფისი)</li>
                        <li className="oneLineRectangle">კაბელების მონტაჟი</li>
                        <li className="twoLineRectangle">ელექტრობლოკების <br/> დაყენება და შეცვლა</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Service;
