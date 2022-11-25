import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BiSortAlt2 } from 'react-icons/bi';
import { getAllData } from '../services/table.data';
import ShowTable_2_Data from './ShowTable_2_Data';

const Table_2 = () => {
    const [lists2, setList2] = useState()
    useEffect(() => {
        loadAllData();
    }, []);

    const loadAllData = async () => {
        try {
            const response = await getAllData();

            if (response) {
                setList2(response.data);
            }
        } catch (error) {
            return error;
        }
    };
    return (
        <div className='container'>
            <p className='text-center mt-5'>Table No-2</p>
            <Table striped bordered hover className='mt-3'>

                <thead>
                    <tr>
                        <th>Email Address</th>
                        <th>Joining Date <BiSortAlt2 /></th>
                        <th>Role <BiSortAlt2 /></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        lists2?.map(data => <ShowTable_2_Data data={data} />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Table_2;