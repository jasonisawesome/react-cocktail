import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function SingleCocktail() {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const { data } = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        console.log(data);
        data.drinks ? setCocktail(data.drinks[0]) : setCocktail(null);
      } catch (error) {
        console.log(error);
      }
    };
    getCocktail();
    setLoading(false);
  }, [id]);

  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail found</h2>;
  } else {
    const {
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strCategory: category,
      strGlass: glass,
      strInstructions: instructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = cocktail;

    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>name: {name}</p>
            <p>category: {category}</p>
            <p>info: {info}</p>
            <p>glass: {glass}</p>
            <p>instructions: {instructions}</p>
            <p>
              ingredients: <span>{strIngredient1}</span>
              <span>{strIngredient2}</span>
              <span>{strIngredient3}</span>
              <span>{strIngredient4}</span>
              <span>{strIngredient5}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
