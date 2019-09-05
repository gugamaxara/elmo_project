import React from "react";

import "./footer.css";

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
                        <h1>კარგი ლოგოტიპი</h1>
                    </div>
                    <div className="navBar">
                        <ul>
                            <li onClick={() => this.handleScrollView("about-page")}>ჩვენ შესახებ</li>
                            <li className="redEgg" onClick={() => this.handleScrollView("about-page")}>კონტაქტი</li>
                        </ul>
                    </div>
                    <div className="footerContact"> 
                        <span>+995 555 55 55 55</span>
                        <span className="redEgg">something@gmail.com</span>
                    </div>
                    <div className="orderButton">
                        <a  onClick={() => this.handleScrollView("order-page")}>შეკვეთა</a>
                    </div>
                    <div className="footerCopyright">
                            <span>2019 რამე სახელი </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;