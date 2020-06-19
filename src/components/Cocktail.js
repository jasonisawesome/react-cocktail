import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail(props) {
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strGlass: glass,
  } = props;
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktails/${id}`} className="btn btn-primary btn-details">details</Link>
      </div>
    </article>
  );
}
