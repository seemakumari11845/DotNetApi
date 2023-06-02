import React, { useState } from 'react';
import './styles/FilterShipments.css';


const FilterShipments = () => {
    const[orderId,setOrderId] = useState('');

    function filterRecord(){
        console.log(orderId);
        fetch(`http://localhost:8080/serach/${orderId}`).then((result)=>{
            result.json().then((resp)=>{
               
            })
        })
    }

    return (
        <>
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
                    <input type='text' className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <lable>CurrentStatus</lable>
                    <input type='text' className='form-control'/>
                </div>
                <div className='col-md-2'>
                    <label>Sort By</label>
                    <select className='form-control'>
                        <option>Date Added (Desc)</option>
                        <option>Date Added (asc)</option>
                    </select>
                </div>
                <div className='col-md-2 text-center  pt-4'>
                    <button className='btn  w-75 text-light fs-6' onClick={filterRecord} style={{"background" : "#ed721d"}}>Apply</button>
                </div>
            </div>   
        </>
    );
};

export default FilterShipments;