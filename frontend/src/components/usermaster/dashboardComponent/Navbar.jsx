import React, { useState } from 'react';
import { FaBars, FaUserAlt}from "react-icons/fa";
import {AiFillHome} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Shipments from './Shipments';


const Navbar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<AiFillHome/>,        
        },
        {
            path:"/shipments",
            name:"Shipment",
            icon:<FaUserAlt/>,
            page:<Shipments/>  
        }
        
        
    ]
    return (
        <div className="container-nav">
           <div style={{width: isOpen ? "250px" : "50px","position" : "sticky","top" : "0px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ShipWay</h1>
                   <div style={{marginLeft: isOpen ? "70px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main style={{"background": "#dee1e6"}}>
           {children}
           </main>
        </div>
    );
};

export default Navbar;