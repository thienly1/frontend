import React, { Component } from 'react';
import FooterClassComponents from './FooterClassComponents';
import HeaderClassComponent from './HeaderClassComponent';
import MainContentClassComponent from './MainContentClassComponent';

class App extends Component {
    render() {
        return (
            <div>
               <HeaderClassComponent/>
               <MainContentClassComponent/>
               <FooterClassComponents/>

            </div>
        );
    }
}

export default App;