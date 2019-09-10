import React from "react";

import "./popup.css";

import Close from "../../image/close.png";


export class PopUp extends React.Component{
    render(){
        return (
            <div className='popup'>
              <div className='popup_inner'>
                <div className="closeButton">
                    <a onClick={this.props.closeButton}><img src={Close}/></a>
                </div>
                <div className="popupInfo">
                        <h1>{this.props.mainTitle}</h1>
                        <p>{this.props.description}</p>
                    </div>
              </div>
            </div>
          );
    }
}





export class MobilePopup extends React.Component{
    handleScrollView = id =>{
      var element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth", inline: "start"})
      this.props.closeButton();
  }

 
  
  render(){
      return (
            <div className='mobile_popup_inner'>
              <div className="mobile_menu">
                <ul>
                  <li onClick={() => this.handleScrollView("about-page")}>ჩვენს შესახებ</li>
                  <li onClick={() => this.handleScrollView("service-page")}>სერვისები</li>
                  <li onClick={() => this.handleScrollView("howtostart-page")}>როგორ დავიწყოთ?</li>
                </ul>
                <button onClick={() => this.handleScrollView("order-page")}>შეკვეთა</button>
              </div>
            </div>
        );
  }
}



