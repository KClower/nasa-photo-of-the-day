import React from "react";
import styled from "styled-components";
import { Spinner } from "reactstrap";


const Card = styled.div`
overflow: hidden;
max-width: 800px;
margin: 0 auto;
border: 10px solid #696969;
border-radius: 20px;
padding: 0;
`;

const CardImg = styled.img`
width: 100%;
height: 400px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
`;


const CardText = styled.div`
max-width: 75%;
margin: 0 auto
`;


function NasaCard(props) {
   const { imgUrl, title, desc, date } = props

   return (
      <Card>
         <div className="image-container">
            <CardImg src={imgUrl} alt="Daily Photo from NASA" />
         </div>
         <h1 className="card-title">{title}</h1>
         <CardText className="card-description">
            <div style = {{display: "flex", justifyContent: "center", margin: "20px 0"}}>
               <Spinner color="primary" />
               <p style = {{margin: "0 20px"}}>{date}</p>
               <Spinner color="primary"/>
            </div>
            <p>{desc}</p>

         </CardText>
      </Card>
   )


}





export default NasaCard;