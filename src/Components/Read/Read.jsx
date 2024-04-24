import React, { useEffect, useState } from 'react';
import {Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Read = () => {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`https://662390783e17a3ac846f8c00.mockapi.io/Crud/Employee/`)
        //axios.get(`http://localhost:3001/Employee`)
                .then((response) => {
                    setAPIData(response.data);
                })
    }, []);

    const setData = (data) => {
        let { id, employeeID, name,department,age,salary,gender,experienceYears } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('EmployeeID', employeeID);
        localStorage.setItem('Name', name);
        localStorage.setItem('Department', department);
        localStorage.setItem('Age', age);
        localStorage.setItem('Salary', salary);
        localStorage.setItem('Gender', gender);
        localStorage.setItem('ExperienceYears', experienceYears);
    }

    const getData = () => {
        axios.get(`https://662390783e17a3ac846f8c00.mockapi.io/Crud/Employee/`)
       //axios.get(`http://localhost:3001/Employee`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://662390783e17a3ac846f8c00.mockapi.io/Crud/Employee/${id}`)
        //axios.delete(`http://localhost:3001/Employee/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
      <div>
      
         <Table className="table table-striped">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>EmployeeID</Table.HeaderCell>
                <Table.HeaderCell>Employee Name</Table.HeaderCell>
                <Table.HeaderCell>Department</Table.HeaderCell>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.HeaderCell>Salary</Table.HeaderCell>
                <Table.HeaderCell>Gender</Table.HeaderCell>
                <Table.HeaderCell>ExperienceYears</Table.HeaderCell> 
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
               
            </Table.Row>
        </Table.Header>

        <Table.Body>

        {APIData.map((data) => {

           return (
            <Table.Row>
                <Table.Cell>{data.employeeID}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.department}</Table.Cell>
                <Table.Cell>{data.age}</Table.Cell>
                <Table.Cell>{data.salary}</Table.Cell>
                <Table.Cell>{data.gender}</Table.Cell>
                <Table.Cell>{data.experienceYears}</Table.Cell> 

                    <Table.Cell>
                        <Link to='/update'>
                            <Button className="btn btn-primary" onClick={() => setData(data)}>Update</Button>
                        </Link>
                    </Table.Cell>

                    <Table.Cell>
                    <Button  className="btn btn-primary" onClick={() => onDelete(data.id)}>Delete</Button>
                    </Table.Cell>

                </Table.Row>
        )})}
         </Table.Body>
         </Table>
     </div>
    )
}


export default Read
