import "./RandomPokemon.css";
export default function RandomPokemon() {
  const randomNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`;
  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{randomNum} </h1>
      <img
        src={url} alt="Random Pokemon Pictures" />
    </div>
  );
}
