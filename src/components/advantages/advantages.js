import React from "react";

import "./advantages.css"
import "./mobile-advantages.css"

import Response from "../../image/response.png";
import Worker from "../../image/worker.png";
import Deal from "../../image/deal.png";
import Time from "../../image/time.png";

class Advantages extends React.Component{
    render(){
        return(
            <div className="advantages">
                <div className="advantagesName">
                    <h1>ჩვენი უპირატესობები</h1>
                </div>
                <div className="wrapper">
                    <ul>
                        <li>
                            <img alt="Response icon" src={Response}/>
                            <h3>სწრაფი რეაგირება</h3>
                            <p>გიპასუხებთ დღის<br/> ნებისმიერ დროს, ნებისმიერ შეკითხვაზე</p>
                        </li>
                        <li className="workerIcon">
                            <img alt="Worker icon" src={Worker}/>
                            <h3>მაღალ კვალიფიცირებული თანამშრომლები</h3>
                            <p>თითოეულ თანამშრომელს აქვს მრავალწლიანი გამოცდილება</p>
                        </li>
                        <li className="dealIcon">
                            <img alt="Deal icon" src={Deal}/>
                            <h3>ხელშეკრულების გაფორმება</h3>
                            <p>ხელშეკრულების <br/> საფუძველზე დაცული იქნებით ნებისმიერი სახის პრობლემისგან</p>
                        </li>
                        <li className="timeIcon">
                            <img alt="Time icon" src={Time}/>
                            <h3>პუნქტუალურობა</h3>
                            <p>სამუშაოები დასრულდება დათქმულ დროს</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Advantages;