const getProducts = () => {
  return (dispatch: any) => {
    fetch("https://fakestoreapi.com/products?limit=$20")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "GET_PRODUCTS",
          payload: data,
        });
      });
  };
};

export { getProducts };
