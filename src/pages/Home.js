import React, { useState, useEffect } from "react";
import CocktailList from "./../components/CocktailList";
import SearchForm from "./../components/SearchForm";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  
  // everytime searchTerm changes, useeffect will cause rerender.
  useEffect(() => {
    setLoading(true);
    const getDrinks = async () => {
      try {
        const { data } = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
       // console.log(data);
        data.drinks ? setCocktails(data.drinks) : setCocktails([]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getDrinks();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}
