import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ReactQuill from 'react-quill';
import { Link } from "react-router-dom";


const RegistrationForm = (props) => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [study, setStudy] = useState("B.E");
    const [dob, setDob] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [salary, setSalary] = useState("");
    const [description, setDescription] = useState('');
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ]
    }

    const handleDate = (date) => {
        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset * 60 * 1000))
        return date.toISOString().split('T')[0]
    }

    const handleDescription = () => {
        const descData = document.getElementsByClassName("ql-editor")[0].innerText;
        setDescription(descData);
        console.log(descData);
    }

    const handleSubmit = async () => {

        const dobValue = handleDate(dob);
        const startDateValue = handleDate(startDate);
        const endDateValue = handleDate(endDate);
        console.log(dobValue, startDateValue, endDateValue)
        await fetch("https://sweede.app/DeliveryBoy/Add-Employee/", {
            method: 'POST',
            body: JSON.stringify({
                "FirstName": fName,
                "LastName": lName,
                "DOB": dobValue,
                "Study": study,
                "StartDate": startDateValue,
                "EndDate": endDateValue,
                "CurrentSalary": salary,
                "Description": description
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="registration">
            <h1 className="regHeading text-center">Employee Registration Form</h1>
            <div className="d-flex mb-5">
                <div className="col-md-6 pe-5">
                    <label for="basic-url1" class="form-label mb-3">First Name*</label>
                    <div class="input-group mb-3 ">
                        <input type="text" class="form-control" placeholder="Enter your name"
                            id="basic-url1" onChange={(e) => setFName(e.target.value)} aria-describedby="basic-addon3" required />
                    </div>
                </div>
                <div className="col-md-6 ps-5">
                    <label for="basic-url2" class="form-label mb-3">Last Name*</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Enter your name"
                            id="basic-url2" onChange={(e) => setLName(e.target.value)} aria-describedby="basic-addon3" required />
                    </div>
                </div>
            </div>
            <div className="mb-5 col-md-12">
                <label for="basic-url3" class="form-label col-md-12 mb-3">DOB</label>
                <DatePicker class="form-control col-md-12 w-100"
                    showIcon id="basic-url3"
                    scrollableYearDropdown
                    showYearDropdown
                    placeholderText={dob}
                    selected={dob}
                    dateFormat="d-M-yy"
                    onSelect={(date) => { setDob(date); console.log(dob) }}
                />
            </div>
            <div className="mb-5">
                <label for="basic-url4" class="form-label mb-3">Study</label>
                <select class="form-select" onChange={(e) => setStudy(e.target.value)} id="basic-url4">
                    <option selected>B.E</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="M.Tech">M.Tech</option>
                </select>
            </div>
            <div className="d-flex mb-5 col-md-12">
                <div className=" col-md-6 pe-5">
                    <div className="col-md-12  ">
                        <label for="basic-url5" class="form-label mb-3">Start Date</label>
                        <DatePicker
                            id="basic-url5"
                            dateFormat="d-M-yy"
                            showIcon
                            scrollableYearDropdown
                            showYearDropdown
                            selected={startDate}
                            className="datePicker"
                            onChange={(date) => setStartDate(date)}

                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </div>
                </div>
                <div className="col-md-6 ps-5">
                    <div className="col-md-12 ">
                        <label for="basic-url6" class="form-label mb-3">End Date</label>
                        <DatePicker
                            showIcon
                            id="basic-url6"
                            selected={endDate}
                            dateFormat="d-M-yy"
                            className="datePicker"
                            scrollableYearDropdown
                            showYearDropdown
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <label for="basic-url7" class="form-label mb-3">Current Salary</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" onChange={(e) => setSalary(e.target.value)} id="basic-url7" placeholder="30000" aria-describedby="basic-addon3" />
                </div>
            </div>
            <div className="mb-5">
                <label for="basic-url8" class="form-label mb-3">Desciption</label>
                <ReactQuill modules={modules} id="basic-url8" theme="snow" onChange={handleDescription} />
            </div>
            <div className=" ">
                <button type="button" class="btn btn-secondary regBtn1 btn-lg ">Cancel</button>
                <Link to="/employeelist"><button type="button" class="btn btn-light btn-lg regBtn2" onClick={handleSubmit}>Save</button></Link>
            </div>

        </div>
    )
};

export default RegistrationForm;
