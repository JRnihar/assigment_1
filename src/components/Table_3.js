import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BiSortAlt2 } from 'react-icons/bi';
import { getAllData } from '../services/table.data';
import ShowTable_3_Data from './ShowTable_3_Data';

const Table_3 = () => {
    const [lists3, setList3] = useState()
    useEffect(() => {
        loadAllData();
    }, []);

    const loadAllData = async () => {
        try {
            const response = await getAllData();

            if (response) {
                setList3(response.data);
            }
        } catch (error) {
            return error;
        }
    };
    return (
        <div className='container'>
                <p className='text-center mt-5'>Table No-3</p>
            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                        <th>Name  </th>
                        <th>City <BiSortAlt2 /></th>
                        <th>Email Address</th>
                        <th>Joing Date</th>
                        <th>Role <BiSortAlt2 /></th>

                    </tr>
                </thead>
                <tbody>
                    {
                        lists3?.map(data => <ShowTable_3_Data data={data} />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Table_3;