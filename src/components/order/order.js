import React from "react";

import "./order.css";

import {OrderPoppup} from "../../components/popup/popup"

class Order extends React.Component{

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

    render(){
        return(
            <div className="order" id="order-page">
                {this.state.showPopUp ? <OrderPoppup closeButton={this.handlePopUp}/> : null}
                <div className="orderName">
                    <h1>შეუკვეთე ახლავე</h1>
                    <p>შეავსეთ ფორმა და დაელოდეთ ზარს</p>
                </div>
                <form>
                    <input type="text" placeholder="სახელი"/>
                    <input type="text" placeholder="ტელეფონის ნომერი"/>
                    <input type="text" placeholder="მისამართი"/>
                    <input type="text" placeholder="სამუშაოს ტიპი" className="redEgg"/>
                    <button onClick={this.handlePopUp}>შეკვეთა</button>
                </form>
            </div>
        )
    }
}

export default Order;