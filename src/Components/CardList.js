import React from "react";
import "../Style/CardList.css";

//export default function Card(props) { replace props with destructuring props const {coverImg, rating, title, price}

export default function Card(props) {
  let badgeText = "";

  if (props.dataItems.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.dataItems.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {/* if badgeText exists display this  */}
      {badgeText && <div className="card--soldout">{badgeText}</div>}

      {/* <img
        src={`../Images/${props.dataItems.coverImg}`}
        className="card--image"
        alt=""
      /> */}
      <img src={props.dataItems.imgUrl} className="card--image" alt="" />
      <div className="card--stats">
        <img src="../Images/Star.png" alt="" className="card--star" />
        {/* <span>{props.dataItems.stats.rating}.0</span> */}
        <span>5.0</span>
        {/* <span>({props.dataItems.stats.reviewCount}) • </span> */}
        <span>(3) • </span>
        <span>{props.dataItems.location}</span>
      </div>
      {<p>{props.dataItems.title}</p>}
      <p>From ${props.dataItems.price} / person</p>
    </div>
  );
}
