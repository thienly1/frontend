import React from 'react';

function Header(props) {
    return (
        <div>
            <h1>Header Component {props.message}</h1>
        </div>
    );
}

function Content() {
    return (
        <div>
            <h1>Content Component</h1>
        </div>
    );
}

function Footer(props) {
    return (
        <div>
            <h1>Footer Component, copyright {props.year}</h1>
        </div>
    );
}

function Main(props) {
    return (
        <div>
            <Header message="Hello G43"/>
            <Content/>
            <Footer year= "2020"/>
        </div>
    );
}

export default Main;