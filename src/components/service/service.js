import React from "react";

import "./service.css"
import "./mobile-service.css"

import servicepic from "../../image/service.png"

class Service extends React.Component{
    render(){
        return(
            <div className="service" id="service-page">
                <div className="serviceBackground">
                    <img alt="service background" src={servicepic}/>
                </div>
                
                <div className="serviceName">
                    <h1>სერვისები</h1>
                </div>
                <div className="mainServices">
                    <ul>
                        <li className="oneLineRectangle">ელექტროობის დაპროექტება</li>
                        <li className="twoLineRectangle">ელექტრო სამუშაოები (ბინა, კოტეჯი, ოფისი)</li>
                        <li className="oneLineRectangle">კაბელების მონტაჟი</li>
                        <li className="oneLineRectangle">ელექტრობლოკების დაყენება და შეცვლა</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Service;
