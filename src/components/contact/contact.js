import React from "react";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//helper functions
import {validateElement} from '@/helper_functions/simple_validator'
import {sendGetRequest} from '@/helper_functions/axios_request'

import {PopUp} from "../popup/popup";

import "./contact.css";
import "./mobile-contact.css";

import ContactImage from "../../image/contact.png";




const contactInitialState = {
    customer_name: '',
    customer_email: '',
    showPopUp: false,
    customer_text: ''

}

class Contact extends React.Component{
    constructor(){
        super()
        this.state = contactInitialState
    }

    handleContactSubmit = event => {
        event.preventDefault()
        var email_validator = ((/^[-\w\W]+@[\w]+(\.[\w]{2,5}|\.[\w]{2,5}\.[\w]{2,5})$/).test(this.state.customer_email))
        if(!this.state.customer_name){
            validateElement(this.refs.customer_name, "გთხოვთ შეიყვანოთ სახელი", "სახელი")
        }
        else if(!this.state.customer_email || !email_validator){
            validateElement(this.refs.customer_email, "გთხოვთ სწორად შეიყვანოთ ელ.ფოსტა", "ელექტრონული ფოსტა")
        }
        else if(!this.state.customer_text){
            validateElement(this.refs.customer_text, "გთხოვთ შეიყვანოთ შეკითხვა", "შეკითხვა")
        }
        else{
            sendGetRequest(this.state.customer_name,this.state.customer_email,this.state.customer_text)
            this.setState({
                showPopUp: !this.state.showPopUp
            })
            var call_form = document.querySelector('div.leftside form')
            call_form.reset()
            setTimeout(() => {
                this.setState(contactInitialState)
            }, 5000)
        }

    }

    handleContactFields = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handlePopUp = () => {
        this.setState({
            showPopUp: !this.state.showPopUp
        })
    }

    render(){
        return(
            <div className="contact" id="contact-page">
                {this.state.showPopUp ? <PopUp closeButton={this.handlePopUp} mainTitle="მადლობა დაკავშირებისთვის!"
                 description="ჩვენი კონსულტანტი რაც შეიძლება სწრაფად დაგიკავშირდებათ"/> : null}
                <div className="contactForm">
                    <img src={ContactImage} alt="header image"/>
                    <div className="leftside">
                        <h2>გაქვთ კითხვები?</h2>
                        <form onSubmit={this.handleContactSubmit}>
                            <input type="text" placeholder="სახელი" name="customer_name" ref="customer_name" onChange={this.handleContactFields}/>
                            <input type="text" placeholder="ელექტრონული ფოსტა" name="customer_email" ref="customer_email" onChange={this.handleContactFields}/>
                            <textarea type="text" placeholder="შეკითხვა" maxLength="250" className="redEgg" ref="customer_text" name="customer_text" onChange={this.handleContactFields}/>
                            <input className="button" type="submit" value="გაგზავნა"/>
                        </form>
                    </div>
                </div>
                <div className="contactInfo">
                    <div className="rightside">
                        <h2>კონტაქტი</h2>
                        <span className="phoneNumber">ტელეფონის ნომერი</span>
                        <span>+995 555 55 55 55</span>
                        <span className="mail">ელექტრონული ფოსტა</span>
                        <span>company.elmo@gmail.com</span>
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