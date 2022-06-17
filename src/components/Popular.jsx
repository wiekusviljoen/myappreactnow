import { useState, useEffect } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };
  return <div>{popular}</div>;
}

export default Popular;
