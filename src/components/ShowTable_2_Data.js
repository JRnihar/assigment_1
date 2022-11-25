import React from 'react';

const ShowTable_2_Data = ({data}) => {
    const { joiningDate, email, role } = data
    return (
        <tr>
           
            <td><a href="#">{email}</a></td>
            <td>{joiningDate}</td>
            <td>{role}</td>
        </tr>
    );
};

export default ShowTable_2_Data;
