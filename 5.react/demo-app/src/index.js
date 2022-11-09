import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ex1-class-components/App';
import Main from './ex2-function-component/Main';
import AFMain from './ex3.arrow/function/ex3.arrow-function-component/AFMain';
import Table from './ex4.table/Table';
import StylingExample from './ex5.styling/StylingExample';
import "bootstrap/dist/css/bootstrap.css" //must import bootstrap from node_modules with the path like this
import NameList from './ex6.variables-functions/NameList';
import NameListProps from './ex7.props/NameListProps';
import MenuList from './ex7.props/MenuList';
import Cars from './ex8.state/Cars';
import TableStyled from './ex5.styling/TableStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const welcomeMessage = React.createElement("h1", null, "Hello Group 43");

// const messageJSX= <h1>Hello Group 43!</h1>
//root.render(welcomeMessage);
//root.render(messageJSX);
//root.render(<App/>)
//root.render(<Main/>)
//root.render(<AFMain/>)

//root.render(<Table/>)
//root.render(<StylingExample/>)
//root.render(<TableStyled/>)
//root.render(<NameList/>)
//  const listOfNames= ["Ly Ta", "Mai Ta"]
//  root.render(<NameListProps namesList={listOfNames}/>)

const links= [
  {id: 1, name: "lexicon", url:"https://www.lexicon.se"},
  {id: 2, name: "Oracle", url:"https://www.oracle.se"},
  {id: 3, name: "Google", url:"https://www.google.se"},

]

//root.render(<Cars/>)


