import React from "react";

import "./service.css"

import servicepic from "../../image/service.png"

class Service extends React.Component{
    render(){
        return(
            <div className="service">
                <img alt="service background" src={servicepic}/>
                <div className="serviceName">
                    <h1>სერვისები</h1>
                </div>
                <div className="mainServices">
                    <ul>
                        <li className="redEgg">ქუჩის განათების დაყენება და შეკეთება</li>
                        <li>ელექტროობის დაპროექტება</li>
                        <li className="redEgg">დაცვის სისტემის დაყენება და შეკეთება</li>
                        <li className="redEgg">ელექტრო სამუშაოები(ბინა, კოტეჯი, ოფისი)</li>
                        <li>კაბელების მონტაჟი</li>
                        <li className="redEgg">შიდა და გარე განათების <br/> მონტაჟი</li>
                        <li>იატაკქვეშა გათბობის მონტაჟი</li>
                        <li className="redEgg">ელექტრობლოკების დაყენება და შეცვლა</li>
                        <li className="redEgg">მაღალი ძაბვის გენერატორების დამონტაჟება</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Service;
