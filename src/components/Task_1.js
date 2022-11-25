import React from 'react';
import { Table } from 'react-bootstrap';
import { BiSortAlt2 } from 'react-icons/bi';
import Task_2 from './Task_2';

const Task_1 = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-center mt-5'>Assigment-1</h1>
            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                        
                        <th>Name  <BiSortAlt2/></th>
                        <th>City <BiSortAlt2 /></th>
                        <th>Email Address <BiSortAlt2 /></th>
                        <th>Joing Date <BiSortAlt2 /></th>
                        <th>Role <BiSortAlt2 /></th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
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
                    </tr>
                </tbody>
            </Table>
           
        </div>
    );
};

export default Task_1;