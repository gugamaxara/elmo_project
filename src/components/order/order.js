import React from "react";

import "./order.css";
import "./mobile-order.css";
import "../popup/popup.css";

//helper functions
import {validateElement} from '@/helper_functions/simple_validator'
import {sendGetRequest} from '@/helper_functions/axios_request'

import {PopUp} from "../../components/popup/popup"

const orderInitialState = {
    customer_name: '',
    customer_phone: '',
    customer_address: '',
    customer_task: '', 
    showPopUp: false
}

class Order extends React.Component{

    constructor(){
        super()
        this.state = orderInitialState
    }

    handleFormSubmit = event => {
        event.preventDefault();
        var customer_phone_validation = /^\d+$/.test(this.state.customer_phone)
        if(!this.state.customer_name){
            validateElement(this.refs.customer_name,"გთხოვთ შეიყვანოთ სახელი","სახელი")
        }
        else if(!customer_phone_validation || this.state.customer_phone.length < 9 || !this.state.customer_phone.startsWith("5")){
            validateElement(this.refs.customer_phone, "გთხოვთ სწორად შეიყვანოთ ტელეფონი", "ტელეფონის ნომერი")
        }
        else if(!this.state.customer_address){
            validateElement(this.refs.customer_address, "გთხოვთ შეიყვანოთ მისამართი", "მისამართი")
        }
        else if(!this.state.customer_task){
            validateElement(this.refs.customer_task, "გთხოვთ შეიყვანოთ სამუშაოს ტიპი", "სამუშაოს ტიპი")
        }
        else{
            sendGetRequest(this.state.customer_name,"","",this.state.customer_phone,this.state.customer_task,this.state.customer_address)
            this.setState({
                showPopUp: !this.state.showPopUp
            })
            var call_form = document.querySelector('div.order form')
            call_form.reset()
            setTimeout(() => {
                this.setState(orderInitialState)
            }, 5000)
        }
    }

    handlePopUp = () => {
        this.setState({
            showPopUp: !this.state.showPopUp
        })
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="order" id="order-page">
                {this.state.showPopUp ? <PopUp closeButton={this.handlePopUp} mainTitle="მადლობა შეკვეთისთვის!"
                 description="ჩვენი კონსულტანტი რაც შეიძლება სწრაფად დაგიკავშირდებათ"/> : null}
                <div className="orderName">
                    <h1>შეუკვეთე ახლავე</h1>
                    <p>შეავსეთ ფორმა და დაელოდეთ ზარს</p>
                </div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" ref="customer_name" name="customer_name" maxLength="50" placeholder="სახელი" onChange={this.handleOnChange}/>
                    <input type="text" ref="customer_phone" name="customer_phone" maxLength="9" placeholder="ტელეფონის ნომერი" onChange={this.handleOnChange}/>
                    <input type="text" ref="customer_address" name="customer_address" maxLength="100" placeholder="მისამართი" onChange={this.handleOnChange}/>
                    <input type="text" ref="customer_task" name="customer_task" maxLength="250" placeholder="სამუშაოს ტიპი" className="redEgg" onChange={this.handleOnChange}/>
                    <input type="submit" value="შეკვეთა" className="button"/>
                </form>
            </div>
        )
    }
}

export default Order;