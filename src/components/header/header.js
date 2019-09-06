import React from "react";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css"
import "./mobile-header.css"

import headerImage from "../../image/fon.png";
import headerMobileImage from "../../image//mobileHeaderImage.png"
import Menu from "../../image/menu.png"
import Phone from "../../image/phone.png";
import Mail from "../../image/mail.png"
import Logo from "../../image/logo.png"

import {CallPoppup, MobilePopup} from "../../components/popup/popup"



class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            showPopUp: false
        }
    }

    handlePopUp = e => {
        e.preventDefault();
        this.setState({
            showPopUp: !this.state.showPopUp
        })
        
    }

    handleScrollView = id =>{
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", inline: "nearest"});
    }

    render(){
        return(
            <div className="header">
                {this.state.showPopUp ? <CallPoppup closeButton={this.handlePopUp}/> : null}
                <div className="mobileHeader">
                    <div className="wrapper">
                        <div className="menuLogo">
                            <img src={Menu} alt="menu icon"  onClick={this.handlePopUp}/>
                        </div>
                        <div className="companyLogo">
                            <img src={Logo} alt="company logo"/>
                        </div>
                        <div className="icons">
                            <ul>
                                <li>
                                    <img src={Phone} alt="phone icon"/>
                                </li>
                                <li>
                                    <img src={Mail} alt="mail icon"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <img src={headerImage} alt="header image" className="headerImage"/>
                <img src={headerMobileImage} className="headerMobileImage"/>
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
                    <span>+995 555 55 55 55</span>
                </div>
                <div className="navigation">
                    <div className="wrapper">
                       <div className="companyName">
                           <img src={Logo} alt="company logo"/>
                       </div>
                        <div className="navBar">
                                <ul>
                                    <li onClick={() => this.handleScrollView("about-page")}>ჩვენ შესახებ</li>
                                    <li onClick={() => this.handleScrollView("contact-page")}>კონტაქტი</li>
                                </ul>
                        </div>
                        <div className="orderButton">
                            <a onClick={() => this.handleScrollView("order-page")}>შეკვეთა</a>
                        </div>
                    </div>
                </div>
                <div className="headerHeart">
                    <div className="leftside">
                        <div className="leftsideInfo">
                            <h2>მაღალი ხარისხი მისაღებ ფასებში თბილისში</h2>
                            <h3>ჩვენ გთავაზობთ სწრაფ და ხარისხიან სერვისს, ასევე გარანტიას ნებისმიერი ტიპის სამუშაოზე</h3>
                        </div>
                    </div>
                    <div className="rightside">
                        <div className="rightsideInfo">
                            <h2>გესაჭიროება კონსულტაცია?</h2>
                            <h3>დასაკავშირებლად შეაფსეთ ფორმა</h3>
                            <form>
                                <input type="text" placeholder="სახელი"/>
                                <input type="text" placeholder="ტელეფონის ნომერი"/>
                                <input onClick={this.handlePopUp} className="button" type="submit" value="მოითხოვე ზარი"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;
