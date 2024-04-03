import React from "react";



function NasaCard(props) {
const {imgUrl, title, desc, date} = props

return(
    <div className = "card">
    <div className = "image-container">
       <img src= {imgUrl} alt="Daily Photo from NASA" />
    </div>
    <h1 className = "card-title">{title}</h1>
    <div className = "card-description">
       <p>{desc}</p>
       <p>{date}</p>
    </div>
    </div>
)


}





export default NasaCard;