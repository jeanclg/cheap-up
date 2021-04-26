import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"


import Navbar from "./Navbar"
import Footer from "./Footer"


export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Navbar/>
                <Footer/>
            </div>
        )
    }
}
