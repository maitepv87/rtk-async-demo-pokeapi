import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, resetState } from "../store/slices/pokemon";
import { LoadingSpinner, ErrorMessage } from "../components";
import { PokemonCard, NextButton } from "../pokemons/components";

export const PokemonPage = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
    error,
  } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());

    return () => {
      // Cleanup code runs on unmount
      dispatch(resetState());
    };
  }, []);

  return (
    <div className="app-container">
      <h1>Pokemon App</h1>
      <hr />

      <ErrorMessage message={error} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <span className="loading-status">Ready to go!</span>
      )}

      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonData={pokemon}
            pokemonImage={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
          />
        ))}
      </div>

      <NextButton
        isLoading={isLoading}
        loadNextPage={() => dispatch(getPokemons(page))}
      />
    </div>
  );
};
