import React from "react";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";
import "./mobile-header.css";
import axios from 'axios';

//helper functions
import {validateElement} from '../../validators/simple_validator'

import "./header.css"

import headerImage from "../../image/fon.png";
import headerMobileImage from "../../image//mobileHeaderImage.png"
import Menu from "../../image/menu.png";
import Phone from "../../image/phone.png";
import Mail from "../../image/mail.png";
import Logo from "../../image/logo.png";

import {PopUp, MobilePopup} from "../../components/popup/popup";


const initialState = {
    customer_name: '',
    customer_phone: '',
    mobileMenu: false,
    showPopUp: false
};

class Header extends React.Component{
    constructor(){
        super()
        this.state = initialState
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    
    handlePopUp = e => {
        e.preventDefault();
        var customer_phone_validation = /^\d+$/.test(this.state.customer_phone)
        if(!this.state.customer_name){
            validateElement(this.refs.customer_name,"გთხოვთ შეიყვანოთ სახელი","სახელი")
        }
        else if(!customer_phone_validation || this.state.customer_phone.length < 9 || !this.state.customer_phone.startsWith("5")){
            validateElement(this.refs.customer_phone, "გთხოვთ სწორად შეიყვანოთ ტელეფონი", "ტელეფონის ნომერი")
        }
        else{
            this.setState({
                showPopUp: !this.state.showPopUp
            })
            var call_form = document.querySelector('div.rightsideInfo form')
            call_form.reset()
            setTimeout(() => {
                this.setState(initialState)
            }, 5000)
        }
    }


    handleRequestCallFields = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleScrollView = id =>{
        var element = document.getElementById(id);
        element.scrollIntoView({behavior: "smooth", inline: "nearest"});
    }


    handleMobileMenu = () => {
        this.setState({
            mobileMenu: !this.state.mobileMenu
        })
    }

    handleScroll = () => {
        if(window.pageYOffset > 72) {
            document.getElementById("mobileHeader").classList.add('sticky');
        }
    }

    render(){
        return(
            <div className="header" id="header-page">
                {this.state.showPopUp ? <PopUp closeButton={this.handlePopUp} mainTitle="მადლობა დაკავშირებისთვის!"
                 description="ჩვენი კონსულტანტი რაც შეიძლება სწრაფად დაგიკავშირდებათ"/> : null}
                {this.state.mobileMenu ? <MobilePopup closeButton={this.handleMobileMenu} /> : null}
                <div className="mobileHeader" id="mobileHeader" onScroll={this.handleScroll}>
                    <div className="wrapper">
                        <div className="menuLogo">
                            <img src={Menu} alt="menu icon"  onClick={this.handleMobileMenu}/>
                        </div>
                        <div className="companyLogo">
                            <img src={Logo} alt="company logo" onClick={() => this.handleScrollView("header-page")}/>
                        </div>
                        <div className="icons">
                            <ul>
                                <li>
                                    <a href="tel:574 22 60 22"><img src={Phone} alt="phone icon"/></a>
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
                                <input onChange={this.handleRequestCallFields} type="text" ref="customer_name" name="customer_name" maxLength="50" placeholder="სახელი"/>
                                <input onChange={this.handleRequestCallFields} type="text" ref="customer_phone" name="customer_phone" maxLength="9" placeholder="ტელეფონის ნომერი"/>
                                {/* <input required type="submit" value="sadas"/> */}
                                <input required onClick={(e) => this.handlePopUp(e)} className="button" type="submit" value="მოითხოვე ზარი"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;
