import React from "react";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from 'axios';

//helper functions
import {validateElement} from '../../validators/simple_validator'

import "./header.css"

import headerImage from "../../image/fon.png";

import {CallPoppup} from "../../components/popup/popup"

const initialState = {
    customer_name: '',
    customer_phone: '',
    showPopUp: false
};

class Header extends React.Component{
    constructor(){
        super()
        this.state = initialState
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

    render(){
        return(
            <div className="header">
                
                {this.state.showPopUp ? <CallPoppup closeButton={this.handlePopUp}/> : null}
                <img src={headerImage} alt="header image"/>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com">
                                <FontAwesomeIcon icon={faFacebook} className="icon"/>
                            </a>
                        </li>
                        <li>
                            {
                                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 
                                <a href="mailto:company.elmo@gmail.com">
                                    <FontAwesomeIcon icon={faGooglePlus} className="icon"/>
                                </a> : 
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=company.elmo@gmail.com">
                                    <FontAwesomeIcon icon={faGooglePlus} className="icon"/>
                                </a>
                            }
                            
                        </li>
                    </ul>
                    <span>+995 555 55 55 55</span>
                </div>
                <div className="navigation">
                    <div className="wrapper">
                       <div className="companyName">
                           <h1>კარგი ლოგოტიპი</h1>
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
                            <h2>მაღალი ხარისხი მისაღებ ფასებში, თბილისში</h2>
                            <h3>ჩვენ გთავატობთ სწრაფ და ხარისხიან სერვისს, ასევე გარანტიას ნებისმიერი ტიპის სამუშაოზე</h3>
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
