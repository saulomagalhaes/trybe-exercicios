import pokemons from './components/Data';
import { Pokemon } from './components/Pokemon';
import './styles/Pokedex.scss';

function Pokedex() {
  const pokemonList = pokemons;
  return (
    <>
      <header className="Title">
        <h1>Pokedéx!</h1>
      </header>
      <main className="Cards">
        {pokemonList.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </main>
    </>
  );
}

export default Pokedex;
