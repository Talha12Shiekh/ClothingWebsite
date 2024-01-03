import React from 'react';
import "bootstrap";
import { FACILITES } from '../data/Data';


const Facililtes = () => {
  return (
    <section className='container my-5'>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2">
            {
                FACILITES.map(({key,Image,heading,description}) => {
                    return <div key={key} className='d-flex my-3 my-md-0' style={{gap:"2rem"}}>
                        <div>
                            <Image/>
                        </div>
                        <div>
                            <h6 className='fw-bold monteserrat'>{heading}</h6>
                            <p className='monteserrat'>{description}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default Facililtes