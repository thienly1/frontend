import React from 'react';
import Table from '../ex4.table/Table';

const StylingExample = () => {
    return (
        <div>
            {/*inline styling */}
            <h3 style={{color: "purple"}}>Hello Group!</h3>
            <h4>List</h4>
            <p style={{backgroundColor: "lightcyan"}}>
                Lorem100
            </p>            
            <Table/>
        </div>
    );
};

export default StylingExample;