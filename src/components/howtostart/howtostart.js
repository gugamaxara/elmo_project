import React from "react";

import "./howtostart.css"
import "./mobile-howtostart.css"

import Order from "../../image/order.png";
import Calendar from "../../image/calendar.png";
import Price from "../../image/price.png";
import Deal from "../../image/deal2.png";

class HowToStart extends React.Component{
    render(){
        return(
            <div className="howToStart" id="howtostart-page">
                <div className="howToStartName">
                    <h1>როგორ დავიწყოთ?</h1>
                </div>
                <div className="wrapper">
                    <ul>
                        <li className="orderIcon">
                            <img alt="Order icon" src={Order}/>
                            <h3>1. შეკვეთის გაკეთება ონლაინ ან ტელეფონით</h3>
                            <p>შეავსე ფორმა რომელის საჭიროებს ერთ წუთზე ნაკლებ დრო</p>
                        </li>
                        <li className="calendarIcon">
                            <img alt="Calendar icon" src={Calendar}/>
                            <h3>2. განსაზღვრეთ სამუშაოს შესრულების თარიღი</h3>
                            <p>ჩვეულებრივ ეს არის მეორე დღე</p>
                        </li>
                        <li className="priceIcon">
                            <img alt="Price icon" src={Price}/>
                            <h3>3. მიიღებთ სამიშაოების დეტალურ ინფორმაციას</h3>
                            <p>ვუზრუნველვყოფთ მაღალი სტანდარტის მატერიალების გამოყენებას</p>
                        </li>
                        <li className="dealIcon">
                            <img alt="Deal icon" src={Deal}/>
                            <h3>4. კონტრაქტის გაფორმება</h3>
                            <p>შეთანხმების საფუძველზე დავიწყებთ სამუშაოების შესრულებას</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HowToStart;