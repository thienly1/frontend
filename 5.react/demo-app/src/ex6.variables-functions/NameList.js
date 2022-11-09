import React from 'react';

const names= ["Ly Ta", "Mai Ta"]
const getLastName =(name) =>{
    let lastName= name.split(' ')[1];
    return <span>{lastName}</span>
}

const NameList = () => {
    return (
        <div>
            <ul>            
            {
                names.map(name =>(
                    <li>
                        {name} -{name.toUpperCase()} - {getLastName(name)}
                    </li>
                ))    
            }
            </ul>
            
           

        </div>
    );
};

export default NameList;