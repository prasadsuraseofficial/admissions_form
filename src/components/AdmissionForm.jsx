import React from 'react'
import { Formik, Form, Field } from 'formik'
import "./AddmissionForm.css"

export default function AdmissionForm() {
    return (
        <Formik
            initialValues={{
                fullName: "prasad",
                motherName: "savita",
                email: "dfdf@fr",
                mobNumber: "87654",
                parentsMobNumber: "543565",
                lastQualification: "BCA",
                college: "SIOM",
                address: "sad",
                aadharNo: "752254453343",
                batchNo: "8",
                dob: "1999-06-23",
                batchMode: "Offline",
                profile: "",
                marksheet: ""
            }}
            onSubmit={data => {
                console.log(data);
            }}>
            <Form className="container bg-white row mt-md-4 p-md-4 p-2 m-3 d-flex align-items-center mx-auto border regForm">
                <div className="col-md-6">
                    <Field type="text" name="fullName" className="form-control" placeholder="Enter Full Name" required={true} />
                </div>
                <div className="col-md-6">
                    <Field type="text" name="motherName" className="form-control" placeholder="Enter Mother Name" required={true} />
                </div>
                <div className="col-md-6">
                    {/* <label htmlFor="">FullName</label> */}
                    <Field name="email" type="email" className="form-control" placeholder="Enter Your Email" required={true} />
                </div>
                <div className="col-md-6">
                    {/* <label htmlFor="">FullName</label> */}
                    <Field name="mobNumber" type="number" className="form-control" placeholder="Your Contact Number" required={true} />
                </div>
                <div className="col-md-6">
                    {/* <label htmlFor="">FullName</label> */}
                    <Field name="parentsMobNumber" type="number" className="form-control" placeholder="Parent's Contact Number" required={true} />
                </div>
                <div className="col-md-6">
                    {/* <label htmlFor="">FullName</label> */}
                    <Field type="text" name="lastQualification" className="form-control" placeholder="Enter Last Qualitification" required={true} />
                </div>
                <div className="col-md-6">
                    {/* <label htmlFor="">FullName</label> */}
                    <Field type="text" name="college" className="form-control" placeholder="Your College Name" required={true} />
                </div>
                <div className="col-md-6">
                    {/* <label htmlFor="">FullName</label> */}
                    <Field type="text" name="address" className="form-control" placeholder="Permanent Address" required={true} />
                </div>
                <div className="col-md-6">
                    {/* <label htmlFor="">FullName</label> */}
                    <Field type="text" name="aadharNo" className="form-control" placeholder="Enter Aahdar Number" required={true} />
                </div>
                {/* <div> */}
                <div className="col-md-6">
                    {/* <label>Batch Number: </label> */}
                    <Field as="select" className="form-control" name="batchNo" required={true}>
                        <option value="">---------Select Batch No---------</option>
                        <option value="1" disabled={true}>Batch 1</option>
                        <option value="2" disabled={true}>Batch 2</option>
                        <option value="3" disabled={true}>Batch 3</option>
                        <option value="4" disabled={true}>Batch 4</option>
                        <option value="5" disabled={true}>Batch 5</option>
                        <option value="6" disabled={true}>Batch 6</option>
                        <option value="7" disabled={true}>Batch 7</option>
                        <option value="8">Batch 8</option>
                        <option value="9">Batch 9</option>
                        <option value="10">Batch 10</option>
                        <option value="11">Batch 11</option>
                        <option value="12">Batch 12</option>
                        <option value="13">Batch 13</option>
                        <option value="14">Batch 14</option>
                        <option value="15">Batch 15</option>
                    </Field>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <label htmlFor="dob">DOB: </label>
                    <Field type="date" name="dob" id="dob" className="form-control" required={true} />
                </div>
                <div className="col-md-6 d-flex">
                    <label htmlFor="">Batch Mode: </label>
                    <Field type="radio" name="batchMode" value="Online" required={true} /><label htmlFor="Online">Online</label>
                    <Field type="radio" name="batchMode" value="Offline" required={true} /><label htmlFor="Offline">Offline</label>
                </div>
                <div className="col-md-6 mt-2">
                    <label htmlFor="">Upload Passport Photo: </label>
                    <input type="file" name="profile" className="border-0" required={true} />
                </div>
                <div className="col-md-6 mt-2">
                    <label htmlFor="">Upload Your Marksheet: </label>
                    <input type="file" name="marksheet" className="border-0" required={true} />
                </div>

                <button type="submit" className="btn col-5 mx-auto btn-success mb-3 mb-md-0">SUBMIT</button>
                <button type="reset" className="btn col-5 mx-auto btn-secondary mb-3 mb-md-0">RESET</button>
            </Form>
        </Formik>
    )
}
