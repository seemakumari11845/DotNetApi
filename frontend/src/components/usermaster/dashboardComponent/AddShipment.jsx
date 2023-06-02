import React, { useState } from 'react'

export default function Modal() {
    const [Awb, setAwb] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [TrackingNo, setTrackingNo] = useState('')
    const [stype, setStype] = useState('')
    const [country, setCountry] = useState('')
    const [CurrentStatus, setCurrentStatus] = useState('')
    const [mobile, setMobile] = useState('')
    const [companyname] = useState('Sager Informatics Pvt Ltd')
    
    // const[company,setCompany] = useState('')

    const addShipment = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        // console.log(currentDate)
        var data = ({ Awb, name, email, TrackingNo, stype, country, CurrentStatus, mobile,companyname,currentDate })
        fetch('http://localhost:8080/addshipment',{
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                setAwb('')
                setName('')
                setEmail('')
                setTrackingNo('')
                setStype('')
                setCountry('')
                setCurrentStatus('')
                setMobile('')
                setMobile('')
              alert('Data Save Successfully! ')
            })
        })
    }
    return (
        <>
            <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content px-4">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Shipments</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>(fields marked with <span style={{ color: "red" }} >*</span> are mendatory)</p>
                            <div className="row" >
                                <div className="col-sm-6">
                                    <label>AWS Number <span style={{ color: "red" }} >*</span></label>
                                    <input type="text" value={Awb} onChange={(e) => { setAwb(e.target.value) }} className='form-control' /><br />
                                    <label>Customer Name <span style={{ color: "red" }} >*</span></label>
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className='form-control' /><br />
                                    <label>Email <span style={{ color: "red" }} >*</span></label>
                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='form-control' /><br />
                                    <label>Tracking No <span style={{ color: "red" }} >*</span></label>
                                    <input type="text" value={TrackingNo} onChange={(e) => { setTrackingNo(e.target.value) }} className='form-control' /><br />
                                    <label>Shipments Type <span style={{ color: "red" }} >*</span></label>
                                    <select className='form-control mb-4' value={stype} onChange={(e) => { setStype(e.target.value) }} style={{ "-webkitAppearance": "push-button" }} >
                                        <option value="all" hidden></option>
                                        <option value="road">By Road</option>
                                        <option value="train">By Train</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label>Choose CurrentStatus <span style={{ color: "red" }} >*</span></label>
                                    <select className='form-control ' value={CurrentStatus} onChange={(e) => { setCurrentStatus(e.target.value) }} style={{ "-webkitAppearance": "push-button" }} >
                                        <option value="all" hidden></option>
                                        <option value="pending">Delivered</option>

                                        <option value="success">Out for delivery</option>

                                        <option value="done">Reached at destination city</option>
                                         
                                        <option value="done"> In Transit</option>

                                        <option value="done"> Picked up Done</option>


                                    </select><br />
                                    <label>Mobile Number <span style={{ color: "red" }} >*</span></label>
                                    <input type="number" value={mobile} onChange={(e) => { setMobile(e.target.value) }} className='form-control' /><br />
                                    <label>Choose Country <span style={{ color: "red" }} >*</span></label>
                                    <select className='form-control' value={country} onChange={(e) => { setCountry(e.target.value) }} style={{ "-webkitAppearance": "push-button" }} >
                                        <option value="all" hidden></option>
                                        <option value="india">India</option>
                                        <option value="japan">Japan</option>
                                        <option value="nepal">Nepal</option>
                                    </select>
                                    <br />
                                    <label>Company Name <span style={{ color: "red" }} >*</span></label>
                                    <input type="number" readOnly placeholder='Sager Informatics Pvt Ltd' className='form-control' value='Sager Informatics Pvt Ltd' /><br /><br />
                                    <button type="button" onClick={addShipment} class="btn text-light w-75" style={{"background" : "#ed721d"}}>Add Shipment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
