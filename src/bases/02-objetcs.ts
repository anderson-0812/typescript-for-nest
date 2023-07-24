export const pokemonsIds = [1,20,30,34,66];

// pokemonsIds.push(+'1'); // convertir aentero


// me aseguro de que un obj siempre tenga esat estrictura y tipado de datos con una interfaz
interface Pokemon {
    id: number;
    name: string;
    age?: number; // al ponerle el simbolo '?' le digo que sea opcional 
}

export const bulbasaur: Pokemon ={
    id: 1,
    name: 'Bulbasaur',
    age: 2
}


export const charmander: Pokemon ={
    id: 2,
    name: "Charmander",
    age: 4

}


export const pokemons:Pokemon[] = [];
pokemons.push(charmander, bulbasaur);
