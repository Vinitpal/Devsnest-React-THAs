import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

interface Props {
  price: number;
  description: string;
  id: number;
  image: string;
  title: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CardComponent = ({ title, id, price, description, image }: Props) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ marginTop: "2rem", backgroundColor: "#424242" }}
    >
      {/* Link  */}
      <Link to={`/day-30/${id}`}>
        <CardActionArea style={{ color: "#fff" }}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={image}
            title={title}
          />
          <CardContent>
            <h5>{description}</h5>
            <p className="mb-0">Price: ₹ {price}</p>
          </CardContent>
        </CardActionArea>
      </Link>
      {/* Buttons */}
      <CardActions>
        <button className="btn btn-outline-primary btn-sm mx-2 mb-2">
          Buy Now
        </button>
        <button className="btn btn-outline-primary btn-sm mx-2 mb-2">
          Add to cart
        </button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
