import React from 'react'
import "../App.css";
import "bootstrap";
import { TRENDS } from '../data/Data';
import { PRODUCT_BACKGROUND_COLOR } from './SingleProduct';

const Heading = ({heading}) => {
    return <h3 className='my-3 position-relative trends_heading monteserrat text-uppercase fs-4'>{heading}</h3>
}


const SingleTrendCard = ({image,item,price}) => {
    return <div className="card border-0 my-5" style={{maxWidth: "540px"}}>
    <div className="row g-0">
      <div className="col-md-4 col-sm-2 col-2">
        <img src={image} style={{backgroundColor:PRODUCT_BACKGROUND_COLOR}} className="img-fluid h-100 trend_image rounded-start" alt="Loading ..." />
      </div>
      <div className="col-md-8 col-sm-10 col-10">
        <div className="card-body">
          <h5 className="card-title fw-light fs-6 monteserrat">{item}</h5>
          <div className='mb-3'>
            {Array(5)
              .fill("")
              .map((s) => {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width=".8em"
                    height=".8em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="orange"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                );
              })}
          </div>
          <p className="card-text fw-bold monteserrat">$ {price}</p>
        </div>
      </div>
    </div>
  </div>
}

const Trends = () => {

  return (
    <div className='container'>
        <div className="row row-cols-md-3 row-cols-sm-2">
            <div>
                <Heading heading={"trends"}/>
                {TRENDS.map(trend => {
                    return <SingleTrendCard key={trend.key}
                    {...trend}
                    />
                })}
            </div>
            <div>
                <Heading heading={"best seller"}/>
                {TRENDS.map(trend => {
                    return <SingleTrendCard key={trend.key}
                    {...trend}
                    />
                })}
            </div>
            <div>
                <Heading heading={"feature"}/>
                {TRENDS.map(trend => {
                    return <SingleTrendCard key={trend.key}
                    {...trend}
                    />
                })}
            </div>
        </div>
    </div>
  )
}

export default Trends