import React from 'react';
import { shape } from 'prop-types';
import Footer from '../../components/footer';

import SearchBar from '../../components/SearchBar';
import RecipesProvider from '../../context/recipesContext/recipesProvider';

function Drinks({ location }) {
  return (
    <RecipesProvider>
      <SearchBar location={ location } />
      <p>Bebidas</p>
      <Footer />
    </RecipesProvider>
  );
}

Drinks.propTypes = {
  location: shape({}).isRequired,
};

export default Drinks;
