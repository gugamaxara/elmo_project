import React from "react";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.css";
import "./mobile-footer.css";

import Logo from "../../image/logo2.png"

class Footer extends React.Component{

    handleScrollView = id =>{
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", inline: "nearest"});
    }

    render(){
        return(
            <div className="footer">
                <div className="footerNavigation">
                    <div className="companyName">
                        <img src={Logo} alt="company logo"/>
                    </div>
                    <div className="navBar">
                        <ul>
                            <li onClick={() => this.handleScrollView("about-page")}>ჩვენ შესახებ</li>
                            <li className="redEgg" onClick={() => this.handleScrollView("contact-page")}>კონტაქტი</li>
                        </ul>
                    </div>
                    <div className="footerContact"> 
                        <span>+995 555 55 55 55</span>
                        <span className="redEgg">company.elmo@gmail.com</span>
                    </div>
                    <div className="orderButton">
                        <a  onClick={() => this.handleScrollView("order-page")}>შეკვეთა</a>
                    </div>
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
                    <div className="footerCopyright">
                            <span> © 2019 ელმო</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;