import React from 'react'
import "../styles/HotItemCard.css"

const HotItemCard = ({image,price,index,name}) => {
    //console.log(image)
  return (
    <div className="HotItemCard">
        <img src={image} alt = {`${index} product`} /> 
        <p>{name}</p>
        <span>{price}</span>


    </div>
  )
}

export default HotItemCard