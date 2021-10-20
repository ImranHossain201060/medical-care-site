

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {
    const {services} = useAuth();

    return (
        <div>

            <div className="overly d-flex justify-content-center align-items-center services-bg">
            <div className="text-center">
                <h2 className="services_head">OUR SERVICES</h2>
                <p className="services-p">Introduce our best medical care team</p>
               <NavLink to="/home">
               <button className="btn">Home</button>
               </NavLink>
            </div>
        </div>

       <div className="service-container">
       {
            services.map(service => <SingleService service={service}></SingleService>)
        }
       </div>
       

        </div>
    );
};

export default Services;