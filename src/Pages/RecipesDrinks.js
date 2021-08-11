import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './RecipesFoods.css';
import CardRecipes from '../Components/CardRecipes';
import { getDrink } from '../Services/FetchApi';
import MyContext from '../Context/MyContext';

export default function RecipesFood() {
  const { cards, setCards } = useContext(MyContext);

  const searchCards = async () => {
    const response = await getDrink();
    setCards(response.drinks);
  };
  useEffect(() => {
    searchCards();
    
  }, []);

  console.log(cards.drinks);

  const renderCardRecipes = () => {
    const showMaxRecipes = 12;
    if (cards) {
      const filteredRecipe = cards.filter(
        (drinks, index) => index < showMaxRecipes,
      );
      return filteredRecipe;
    }
  };
  return (
    <div>
      <Header className="title" title="Bebidas" searchIconAppears />
      <div className="cardlist">
        {cards.length > 0 && renderCardRecipes().map((recp, index) => (
          <Link
            className="link"
            key={ index }
            to={ {
              pathname: `/bebidas/${recp.idDrink}`,
            } }
          >
            <CardRecipes
              key={ index }
              index={ index }
              thumb={ recp.strDrinkThumb }
              title={ recp.strDrink }
            />
          </Link>))}
      </div>
      <Footer />
    </div>
  );
}
