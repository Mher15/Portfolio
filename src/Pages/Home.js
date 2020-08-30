import React, { Component } from 'react';


import HomHeader from "./HomHeader";
import Main from "./Main";
import MainB from "./MainB";



export default class Home extends Component {
    render() {
        return (
            <>
                <HomHeader />
                <Main />
                <MainB />
            </>
        )
    }
}