import React, {useEffect, useState} from "react";
import Axios from "axios";
// import { Link, useHistory, useParams } from "react-router-dom"


export default function ExploreCocktailsPage() {
  const [cocktails, setCocktails] = useState({});
  console.log("Hello from Home Page");

  useEffect(() => {
    const fetchData = async () => {
      const data = await Axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      console.log("Hello from data", data);
      setCocktails(data.data);
    };
    fetchData()   
  }, []);
  console.log("hello from useState", cocktails)




  return (
'Browse delish drinks by category'
//       {cocktails.map((cocktail) => (
//     console.log(cocktail) 
//       ))}   
    
  )}

