import React from 'react';

const ShowTable_3_Data = ({data}) => {
    const { person, city, email, joiningDate, role } = data
    return (
        <tr>

            <td><img className='picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMm0H9wORZzcrRC45kqJjxAS8EctWqz4PMTLW6Qg9Xg&s" alt="" />{person.name}</td>
            <td>{city}</td>
            <td><a href="#">{email}</a></td>
            <td>{joiningDate}</td>
            <td>{role}</td>
        </tr>
    );
};

export default ShowTable_3_Data;