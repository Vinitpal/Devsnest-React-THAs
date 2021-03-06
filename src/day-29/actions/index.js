const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=3a81ceec694b4589a6791432212707&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE_PLACE_DATA",
          payload: data,
        });
      });
  };
};

const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  };
};

export { updatePlace, updatePlaceData, toggleTheme };
