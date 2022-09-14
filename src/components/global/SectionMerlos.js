import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalDataContext } from "../../context/context";

export const SectionMerlos = () => {
    const { rpdata } = useContext(GlobalDataContext);
  return (
    <div className='container text-center contenxt-section-merlos' style={{ backgroundImage:`url("${rpdata?.stock?.[16]}")`}}>
        <div className=''>
        <h2>Our Responsibility Is To Conserve Water</h2>
        <p>In California we are in water shortage and that will continue for many years to come, therefore I have created a proposal to design a strategy to achieve greater water savings, using high-quality tools and excellent technology, and totally free advice. Audit the irrigation system to find alternatives. I am duly certified in the irrigation system.</p>
        <Link className="btn btn-base" to="/contact">
                  FREE ESTIMATE
                </Link>
        </div>
        
    </div>
  )
}
