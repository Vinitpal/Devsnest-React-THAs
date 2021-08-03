import React from "react";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./day-28.css";

const Day28 = () => {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});

  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=3a81ceec694b4589a6791432212707&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => setPlaceData(data));
  };

  useEffect(() => {});

  return (
    <div className="day28">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <button className="btn btn-primary" onClick={updatePlaceData}>
              Submit
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card bg-dark text-white my-4 py-4 ">
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} alt="cloud" />
                  <div className="temp">{placeData.current.temp_c}°</div>
                  <div className="desc">{placeData.current.condition.text}</div>
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col-4">
                        <div className="title">Wind now</div>
                        <div className="data">
                          {placeData.current.wind_kph}{" "}
                          <span className="unit">KM</span>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {placeData.current.humidity}{" "}
                          <span className="unit">%</span>
                        </div>
                      </div>

                      <div className="col-4">
                        <div className="title">Percipitation</div>
                        <div className="data">
                          {placeData.current.precip_in}{" "}
                          <span className="unit">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2>Place Not Found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day28;
