import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { BiSortAlt2 } from 'react-icons/bi';
import { getAllData } from '../services/table.data';
import ShowTable_1_Data from './ShowTable_1_Data';

const Table_1 = () => {
    const [lists, setList] = useState()
    useEffect(() => {
        loadAllData();
    }, []);

    const loadAllData = async () => {
        try {
            const response = await getAllData();

            if (response) {
                setList(response.data);
            }
        } catch (error) {
            return error;
        }
    };
    return (
        <div className='container'>
            <h1 className='text-center mt-5'>Assigment-2</h1>
            <p className='text-center mt-5'>Table No-1</p>
            <Table striped bordered hover className='mt-3'>
               
                <thead>
                    <tr>
                        <th>Name<BiSortAlt2 /></th>
                        <th>Email Address </th>
                        <th>Role </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        lists?.map(data => <ShowTable_1_Data  data={data}/>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Table_1;


{/* <tr>

                        <td><img className='picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMm0H9wORZzcrRC45kqJjxAS8EctWqz4PMTLW6Qg9Xg&s" alt="" />  Prerna Jha</td>
                        <td>Mumbai</td>
                        <td><a href="#">prernajha@gmail.com</a></td>
                        <td>12/02/2018</td>
                        <td>UI Designer</td>
                    </tr>
                    <tr>
                        <td><img className='picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMm0H9wORZzcrRC45kqJjxAS8EctWqz4PMTLW6Qg9Xg&s" alt="" />Rukmini Pandit</td>
                        <td>Delhi</td>
                        <td><a href="#">rukminipandit@gmail.com</a></td>
                        <td>09/02/2022</td>
                        <td>Front-end Developer</td>
                    </tr>
                    <tr>
                        <td><img className='picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMm0H9wORZzcrRC45kqJjxAS8EctWqz4PMTLW6Qg9Xg&s" alt="" />Nandhini Lingesh</td>
                        <td><p>Delhi</p></td>
                        <td><a href="#">nandhinilingesh@gmail.com</a></td>
                        <td>30/06/2019</td>
                        <td>UX Designer</td>
                    </tr>
                    <tr>
                        <td><img className='picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMm0H9wORZzcrRC45kqJjxAS8EctWqz4PMTLW6Qg9Xg&s" alt="" />Ankit Singh</td>
                        <td>Kolkata</td>
                        <td><a href="#">ankitsingh@gmail.com</a></td>
                        <td>11/11/2017</td>
                        <td>Backend Developer</td>
                    </tr>
                    <tr>
                        <td><img className='picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMm0H9wORZzcrRC45kqJjxAS8EctWqz4PMTLW6Qg9Xg&s" alt="" />Amith Kumar</td>
                        <td>Mumbai</td>
                        <td><a href="#">amithkumar@gmail.com</a></td>
                        <td>24/07/2020</td>
                        <td>Front-end Developer</td>
                    </tr>
                    <tr>
                        <td><img className='picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMm0H9wORZzcrRC45kqJjxAS8EctWqz4PMTLW6Qg9Xg&s" alt="" />Shalini Singhla</td>
                        <td>Mumbai</td>
                        <td><a href="#">shalinisinghla@gmail.com</a></td>
                        <td>17/09/2017</td>
                        <td>UX Designer</td>
                    </tr>
                    <tr>
                        <td><img className='picture' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMm0H9wORZzcrRC45kqJjxAS8EctWqz4PMTLW6Qg9Xg&s" alt="" />Abhishek Singh</td>
                        <td>Kolkata</td>
                        <td><a href="#">abhisheksingh@gmail.com</a></td>
                        <td>01/06/2017</td>
                        <td>Front-end Developer</td>
                    </tr> */}