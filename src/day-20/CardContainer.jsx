import { useState } from "react";
import Card from "./Card";

const CardContainer = (props) => {
  const arr = [
    {
      food: "Pizza",
      calorie: "55",
    },
    {
      food: "Cake",
      calorie: "48",
    },
    {
      food: "Jalebi",
      calorie: "44",
    },
    {
      food: "Burger",
      calorie: "100",
    },
    {
      food: "Dahi vada",
      calorie: "37",
    },
    {
      food: "Aalu roti",
      calorie: "41",
    },
    {
      food: "Samosa",
      calorie: "32",
    },
  ];

  // console.log(useState);
  let [foods, setFood] = useState(arr);

  // console.log(foods, setFood);

  const deleteTask = (id, food) => {
    const newFood = foods.filter((el, idx) => idx !== id);
    setFood(newFood);
  };

  return (
    <div className="card-container">
      {foods.length > 0 ? (
        foods.map((item, idx) => (
          <Card
            key={idx}
            food={item.food}
            onDelete={deleteTask}
            calorie={item.calorie}
            id={idx}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No entry</h1>
      )}
    </div>
  );
};

export default CardContainer;

// {
//   /* <Card food="Pizza" calorie="55" />
//     <Card food="Jalebi" calorie="44" />
//     <Card food="Burger" calorie="100" />
//     <Card food="Dahi vada" calorie="37" />
//     <Card food="Aalu roti" calorie="59" />
//     <Card food="Samosa" calorie="63" /> */
// }
