import Card from "./Card";

const CardContainer = (props) => {
  const arr = [
    {
      food: "Pizza",
      calorie: "55",
    },
    {
      food: "Pizza",
      calorie: "55",
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
      calorie: "59",
    },
    {
      food: "Samosa",
      calorie: "63",
    },
  ];
  return (
    <div className="card-container">
      {arr.map((item, idx) => (
        <Card key={idx} food={item.food} calorie={item.calorie} />
      ))}
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
