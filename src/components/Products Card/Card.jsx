import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({img,item}) => {
  return (
    <div className={ item.length > 25 ? " show products-card" :"products-card" }>
        <LazyLoadImage src={img} alt="" />
        <div className="name">
          <p>{item.length > 25 ? item.slice( 0,25 )+ "..." : item}</p>
        </div>
        <div className="hoverName">
          <p>{item}</p>
        </div>
    </div>
  )
}

export default Card