import React, { useState } from 'react';


const Person = () => {

    const initialValue = {firstName: "", lastName: ""};

    //States
    const[person, setPerson] = useState(initialValue);
    const[showData, setShowData] = useState(false);

    const changeFirstName = (e) => {
        const value= e.target.value;
        let _person= {...person, firstName: value};
        setPerson(_person);       

    }
    const changeLastName = (e) =>{
        const value= e.target.value;
        let _person= {...person, lastName: value};
        setPerson(_person);
    }

    const resetForm= () =>{
        setPerson(initialValue);
    }

    return (
        <div className="container col-10">
        <form className="form-control my-4">
            <div className="form-floating my-3">
                <input 
                type="text" 
                className="form-control" 
                id="firstname"             
                onChange={changeFirstName}
                value={person.firstName}
                placeholder="Enter FirstName"/>
                <label for="firstname">Enter FirstName</label>
            </div>
            <div className="form-floating mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="lastname" 
                onChange={changeLastName}
                value={person.lastName}
                placeholder="Enter Lastname"/>
                <label for="lastname">Enter LastName</label>
            </div>

            <div className="card-footer">
                <button type="button" className="btn btn-primary mb-2" onClick={() =>{setShowData(true)}}>Submit</button>
            </div>

        </form>

        
       { showData &&(
       <div className="card">
            <div classNameName="card-header bg-dark">
                <h3 className="text-white">Person Info</h3>
            </div>
            <div className="card-body col-sm-5">

                <div className="form-floating my-3">
                    <input readonly 
                    type="text" 
                    className="form-control" 
                    id="firstnameValue" 
                    value={person.firstName}
                    placeholder="Enter FirstName"
                    />
                    <label for="firstnameValue">FirstName:</label>
                </div>
                <div className="form-floating mb-3">
                    <input readonly 
                    type="text" 
                    className="form-control" 
                    id="lastnameValue" 
                    value={person.lastName}
                    placeholder="Enter Lastname"
                    />
                    <label for="lastnameValue">LastName:</label>
                </div>

            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-danger" onClick={()=>{resetForm(); setShowData(false)}}>
                    Reset
                </button>
            </div>
        </div>
        )}

    </div>
    );
};

export default Person;