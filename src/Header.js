import {Component} from "react"
import logo from "./logo.svg"
import React from "react"

export class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Around</h1>
            </header>
        );
    }
}