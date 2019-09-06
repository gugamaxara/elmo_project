import React from "react";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from 'axios';

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

    componentDidMount(){
        console.log("mounted")
        
    }

    handleTimeout = (el, txt) => {
        return setTimeout(() => {
            el.placeholder = txt
            el.style.backgroundColor = "white"
        }, 3000)
    }
    
    handlePopUp = e => {
        e.preventDefault();
        var customer_name = this.refs.customer_name
        var customer_phone = this.refs.customer_phone
        var customer_phone_validation = (/^\d+$/.test(this.state.customer_phone)) ? true : false
        if(!this.state.customer_name){
            customer_name.placeholder = "გთხოვთ შეიყვანოთ სახელი"
            customer_name.style.backgroundColor = 'red'
            this.handleTimeout(this.refs.customer_name, "სახელი")
        }
        else if(!customer_phone_validation || this.state.customer_phone.length < 9 || !this.state.customer_phone.startsWith("5")){
            customer_phone.placeholder = "გთხოვთ სწორად შეიყვანოთ ტელეფონი"
            customer_phone.style.backgroundColor = "red"
            this.handleTimeout(this.refs.customer_phone, "ტელეფონის ნომერი")
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
