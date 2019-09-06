import React from "react";

import "./popup.css";

import Close from "../../image/close.png";

export class CallPoppup extends React.Component{
    render(){
        return (
            <div className='popup'>
              <div className='popup_inner'>
                <div className="closeButton">
                    <a onClick={this.props.closeButton}><img src={Close}/></a>
                </div>
                <div className="callPopupInfo">
                        <h1>მადლობა დაკავშირებისთვის!</h1>
                        <p>ჩვენი კონსულტანტი რაც შეიძლება სწრაფად დაგიკავშირდებათ</p>
                    </div>
              </div>
            </div>
          );
    }
}

export class OrderPoppup extends React.Component{
    render(){
        return (
            <div className='popup'>
              <div className='popup_inner'>
                <div className="closeButton">
                    <a onClick={this.props.closeButton}><img src={Close}/></a>
                </div>
                <div className="orderPopupInfo">
                        <h1>მადლობა შეკვეთისთვის!</h1>
                        <p>ჩვენი კონსულტანტი რაც შეიძლება სწრაფად დაგიკავშირდებათ</p>
                    </div>
              </div>
            </div>
          );
    }
}



export class MobilePopup extends React.Component{
    handleScrollView = id =>{
      var element = document.getElementById(id);
      element.scrollIntoView({behavior: "smooth", inline: "nearest"});
      this.props.closeButton();
  }
  
  render(){
      return (
          <div className='mobile_popup'>
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
          </div>
        );
  }
}



