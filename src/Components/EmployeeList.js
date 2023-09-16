import React, { useEffect, useState } from "react";
import ListItem from './ListItem';


const EmployeeList = (props) => {

    const [empData, setEmpData] = useState([]);
    const fetchData = () => {
        fetch("https://sweede.app/DeliveryBoy/Get-Employee/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setEmpData(data);
            })
    }
    useEffect(() => {
        fetchData();
    }, [empData])
    return (
        <div className="empDiv" >
            <h1 className="empHeading">Employee List</h1>
            <div className="employeeList">
                <table class="table">
                    <thead>
                        <tr className="listHead">
                            <th scope="col">Name</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col" className="w-25">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empData.map((props) => <ListItem props={props} key={props.id} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default EmployeeList;
