import React from "react";
import { useSelector } from "react-redux";

const WeatherContainer = () => {
  const placeData = useSelector((state) => state.placeData);

  return (
    <div className="container">
      <div className="row">
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
  );
};

export default WeatherContainer;
