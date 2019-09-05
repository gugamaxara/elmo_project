import React from "react";

import "./app.css"


import Header from "./components/header/header";
import AboutUs from "./components/about/about";
import Service from "./components/service/service";
import Advantages from "./components/advantages/advantages";
import HowToStart from "./components/howtostart/howtostart";
import Order from "./components/order/order";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <AboutUs/>
                <Service/>
                <Advantages/>
                <HowToStart/>
                <Order/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}


export default App;