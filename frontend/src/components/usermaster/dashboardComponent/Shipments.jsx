import React, { useEffect, useState } from 'react';
import BulkInsert from './AddShipment';
import * as XLSX from 'xlsx';
// import FilterShipments from './FilterShipments';
import './styles/FilterShipments.css';
const Shipments = () => {
    const [data, setData] = useState([]);
    const [date, setDate] = useState('');
    const[TrackingNo,setTrackingNo] = useState('');
    const[Awb,setAwb] = useState('');
    const[CurrentStatus,setCurrentStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    

    const filterRecord = async () => {
        const newData = data.filter(x => x.TrackingNo === (TrackingNo === "" ? x.TrackingNo : TrackingNo))
        .filter(y=>y.Awb === (Awb ==="" ? y.Awb : Awb))
        .filter(z=>z.CurrentStatus === (CurrentStatus === "" ? z.CurrentStatus :CurrentStatus)) ;
        if (newData.length > 0) {
            setData(newData);
        } else {
            getData();
        }
    };
    

    const getData = () => {
        fetch('http://localhost:8080/shipments').then((result) => {
            result.json().then((resp) => {
                setData(resp)
                console.log(resp)
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const exportData = () => {
        fetch('http://localhost:8080/export')
          .then(response => response.arrayBuffer())
          .then(buffer => {
            const excelBuffer = new Uint8Array(buffer);
            saveAsExcelFile(excelBuffer, 'data.xlsx');
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };
      
      const saveAsExcelFile = (buffer, fileName) => {
        const data = new Blob([buffer], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      };
      

    const sortByDateAsc = () => {
        const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
        setData(sortedData);
      };
      
      const sortByDateDesc = () => {
        const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
        setData(sortedData);
      };
      

    return (
        <>
            <div className='container-fluid'>
                <h5>Shipments</h5>
                <div className='row bg-light p-2 rounded'>
                    <div className='col-sm-7'></div>
                    <div className='col-sm-5'>
                        <button className='btn btn-info btn-secondary  text-light me-2' >Bulk Upload Shipments</button>
                        <button className='btn btn-info text-light me-2'
                            data-bs-toggle="modal" data-bs-target="#exampleModal">Add Shipments</button>
                        <button className='btn btn-info text-light'>Update Shipments Status</button>
                    </div>
                </div>


                <div className='row bg-light pt-5'>
                <div className='col-md-2'>
                    <lable>Period</lable>
                    <select className='form-control'>
                        <option>Last 7 days</option>
                        <option>Last 15 days</option>
                        <option>Last 30 days</option>
                    </select>
                </div>
                <div className='col-md-2'>
                    <lable>TrackingNo</lable>
                    <input type='text' value={TrackingNo} onChange={(e)=>setTrackingNo(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2'>
                <lable>AWB No.</lable>
                    <input type='text' value={Awb} onChange={(e)=>setAwb(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <lable>CurrentStatus</lable>
                    <input type='text' value={CurrentStatus} onChange={(e)=>setCurrentStatus(e.target.value)} className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <label>Sort By</label>
                    <select className='form-control'
                     onChange={event => event.target.value === 'asc' ? sortByDateAsc() : sortByDateDesc()}
                      >
                        <option value="asc" >Date Added (asc)</option>
                        <option value="desc">Date Added (Desc)</option>
                    </select>
                </div>
                <div className='col-md-2 text-center  pt-4'>
                    <button className='btn  w-75 text-light fs-6' onClick={filterRecord} style={{"background" : "#ed721d"}}>Apply</button>
                </div>
            </div>


                {/* <div className='row bg-light p-3'>
                    <div className='col-sm-12'>
                        <div className='pb-3'>
                            <h6 className='fw-bold m-0' style={{ "fontFamily": "Calibri", "letterSpacing": "-.8px" }}>Current Carriers</h6>
                            <button className='btn btn-dark p-1 m-1' style={{ "fontSize": "12px" }}>All Records</button>
                        </div>
                        <div className='mb-4'>
                            <h6 className='fw-bold m-0' style={{ "fontFamily": "Calibri", "letterSpacing": "-.8px" }}>Current Status</h6>
                            <button className='btn btn-dark p-1 m-1' style={{ "fontSize": "12px" }}>All Records</button>
                        </div>
                        

                    </div>
                </div> */}

                <div className='row bg-light  rounded pt-3' >
                    <div className='col-sm-12' style={{"overflowX":"auto"}}>
                    <div className='pb-3' style={{ "display": "flex" }}>
                            <span className='m-0' style={{ "fontFamily": "Calibri", "letterSpacing": ".8px" }}>Current : {data.length}  Status</span>
                            <div className='align-right'>
                                <button className='btn btn-info download-shipment text-light' onClick={exportData} >Download</button>
                            </div>
                        </div>


{/* 


                        <div className='row bg-light p-2 rounded'>
                    <div className='col-sm-7'></div>
                    <div className='col-sm-5'>
                        <button className='btn btn-info btn-secondary  text-light me-2' >All Records </button>
                        <button className='btn btn-info text-light me-2'
                            data-bs-toggle="modal" data-bs-target="#exampleModal">Delivered</button>
                        <button className='btn btn-info text-light'>RTO</button>
                    </div>
                </div>



 data-bs-toggle="modal" data-bs-target="#exampleModal"

                 
 */}



<div className='row bg-light p-2 rounded'>
    <div className='col-sm-5'>

        <button className='btn btn-info btn-secondary text-light me-2'>All Records</button>

        <button className='btn btn-info text-light me-2'>Delivered</button>

        <button className='btn btn-info text-light'>RTO</button>





    </div>
    <div className='col-sm-7'></div>
</div>






                        <table className='table text-center' style={{ "fontSize": "13px", }} >
                            <thead style={{ "background": "#ced4da" }}>
                                <tr>
                                    <th>Tracking No</th>
                                    <th>Tracking Details</th>
                                    <th>Current Status</th>
                                    <th>Customer Details</th>
                                    <th>Destination</th>
                                    <th>Pickup Date</th>
                                    <th>Expected Devivery</th>
                                    <th>En Route Days</th>
                                    <th>Order Date</th>
                                    <th>Date Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) =>
                                        <tr>
                                            <td>{item.TrackingNo}</td>
                                            <td>{item.ClientCode}<br />{item.TrackingNo}</td>
                                            <td><button className='btn btn-warning text-light'>
                                            {
                                                item.TrackingHistory[item.TrackingHistory.length-1].CurrentStatus
                                            }
                                                </button></td>
                                            <td>{item.name}<br />{item.mobile}<br />{item.email}</td>
                                            <td>N/A</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>1</td>
                                            <td>N/A</td>
                                            <td>{item.currentDate}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <BulkInsert />
        </>

    );
};

export default Shipments;
