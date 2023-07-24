//  VIDEO 18 SECCION 2
import { Move, PokeapiResponse } from '../interfaces/pokeapia-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    // el cosntructor se ejecuta siempre que se crea instancias de esta clase 
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        // private readonly http: PokeApiAdapter
        private readonly http: HttpAdapter // vieo 20 seccion 2 abstraigo el tipp de clase de adaptador implementando la interfaz

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }
  
    async getMoves(): Promise<Move[]> {
        // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data  = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves[0].move.name );
        
        return data.moves;
    }

}

// genero instalcia de mi clase adapter // Ahora tenemos dos adapter para poder hacer la demostracion de sustituciond e Liskov 
const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

// paso argumentos del pokemon y mi instancia de la calse adapter, esta instalacia la puedo pasar n veces
export const charmander = new Pokemon ( 4, 'Charmander', pokeApiFetch );
export const pikachu = new Pokemon ( 3, 'Pikachu', pokeApiAxios );

charmander.getMoves();
pikachu.getMoves();