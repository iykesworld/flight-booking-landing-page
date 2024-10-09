import React from 'react'
import './Card.css'

const Card = ({data}) => {
  return (
    <div className='card'>
        <div className="card-title">
            <p>{data.tes_title}</p>
        </div>
        <div className="card-body">
            <img src={data.tes_img} alt="" />
            <div className="card-name">
                <p className='card-name-title'>{data.tes_name}</p>
                <p>{data.tes_sub}</p>
            </div>
        </div>
    </div>
  )
}

export default Card