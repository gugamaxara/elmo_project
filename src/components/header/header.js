import React from "react";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css"

import headerImage from "../../image/fon.png";

import {CallPoppup} from "../../components/popup/popup"


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
                                <input required type="text" placeholder="სახელი"/>
                                <input required type="text" placeholder="ტელეფონის ნომერი"/>
                                <button onClick={this.handlePopUp}>მოითხოვე ზარი</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;
