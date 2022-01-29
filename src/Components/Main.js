import React, { useEffect } from "react";
import "../Style/Main.css";
import CardList from "./CardList";
//import Data from "../data";
import axios from "axios";

export default function Main() {
  const [test, setDatalist] = React.useState([]);

  const dataList = test.map((dataItems) => {
    return (
      <CardList key={dataItems.id} dataItems={dataItems} className="tes" />
    );
  });

  useEffect(() => {
    const apiUrl =
      "https://techmave-react-projects-default-rtdb.asia-southeast1.firebasedatabase.app/services.json";
    axios.get(apiUrl).then((response) => {
      if (response.data) {
        setDatalist(Object.values(response.data));
        console.log(response.data);
      }
    });
  }, []);

  return (
    <div className="main--main-div">
      <div className="main--hero-container">
        <img src="../Images/Group.png" alt="" />
        <div className="main--hero-container-text">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
      <div className="main--items-list">{dataList}</div>
    </div>
  );
}
