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
                        <li className="redEgg twoLineRectangle" >ქუჩის განათების დაყენება და შეკეთება</li>
                        <li className="oneLineRectangle">ელექტროობის დაპროექტება</li>
                        <li className="redEgg twoLineRectangle">დაცვის სისტემის დაყენება და შეკეთება</li>
                        <li className="redEgg twoLineRectangle">ელექტრო სამუშაოები (ბინა, კოტეჯი, ოფისი)</li>
                        <li className="oneLineRectangle">კაბელების მონტაჟი</li>
                        <li className="redEgg twoLineRectangle">შიდა და გარე განათების <br/> მონტაჟი</li>
                        <li className="oneLineRectangle">იატაკქვეშა გათბობის მონტაჟი</li>
                        <li className="redEgg twoLineRectangle">ელექტრობლოკების დაყენება და შეცვლა</li>
                        <li className="redEgg twoLineRectangle">მაღალი ძაბვის გენერატორების დამონტაჟება</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Service;
