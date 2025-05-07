import PropTypes from "prop-types";
import "./PokemonCard.css";

export const PokemonCard = ({ pokemonData, pokemonImage }) => {
  return (
    <div
      className="pokemon-card"
      role="article"
      aria-label={`Card for ${pokemonData.name}`}
    >
      <img
        src={pokemonImage}
        alt={pokemonData.name}
        className="pokemon-image"
      />
      <div className="pokemon-name">{pokemonData.name}</div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemonData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  pokemonImage: PropTypes.string.isRequired,
};
