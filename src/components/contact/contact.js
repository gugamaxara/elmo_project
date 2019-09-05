import React from "react";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./contact.css";

import ContactImage from "../../image/contact.png";

class Contact extends React.Component{
    render(){
        return(
            <div className="contact" id="contact-page">
                <div className="contactForm">
                    <img src={ContactImage} alt="header image"/>
                    <div className="leftside">
                        <h2>გაქვთ კითხვები?</h2>
                        <form>
                            <input type="text" placeholder="სახელი"/>
                            <input type="text" placeholder="ელექტრონული ფოსტა"/>
                            <textarea type="text" placeholder="შეკითხვა" className="redEgg"/>
                            <button>გაგზავნა</button>
                        </form>
                    </div>
                </div>
                <div className="contactInfo">
                    <div className="rightside">
                        <h2>კონტაქტი</h2>
                        <span>დაგვიკავშირდით</span>

                        <span className="phoneNumber">ტელეფონის ნომერი</span>
                        <span>+995 555 55 55 55</span>
                        <span className="mail">ელექტრონული ფოსტა</span>
                        <span>something@gmail.com</span>
                        <span className="place">ადგილმდებარეობა</span>
                        <p>თბილისი, საქართველო</p>
                        <div className="socialNetwork">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com">
                                        <FontAwesomeIcon icon={faFacebook} className="icon"/> 
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.google.com">
                                        <FontAwesomeIcon icon={faGooglePlus} className="icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Contact;