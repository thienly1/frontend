import React from 'react';

const Header = () => <h2>Header</h2>
const Content = () => <h2>Content</h2>
const Footer = () => {
    return(
        <>
        <h2>Footer</h2>
        <h2>copyright</h2>
        </>
    )

} 


const AFMain = () => {
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default AFMain;