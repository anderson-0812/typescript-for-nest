// formacexplicita de definir clases 
// export class Pokemon {
//     public id: number;
//     public name: string;

//     constructor(id:number, name:string){
//         this.id = id;
//         this.name = name;
//         console.log('Connstructor llamado');
//     }
// }

import axios from 'axios';
import { Move, PokemonapiResponse } from '../interfaces/pokeapia-response.interface';

// forma implicita
export class Pokemon {


    // getters 
    get imageUrl(){
        // ojo en este caso el this apunta  ala instancia de la clase (en este casoa  charmander )
        return `https://pokemon.com/${ this.id }.jpg`
    }

    // forma implicita de construnctor
    constructor(
        public readonly id:number, // readonly es una propiedad asignada al atributo  
        public name:string,
        // public imageUrl:string,
    ){
        console.log('Connstructor llamado');
    }

    // metodo de la clase

    scream(){
        console.log(this.name.toUpperCase() + '!!');
    }

    speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        // los <> son definiciones genericas de algun valor a recibir 
        const { data } = await axios.get<PokemonapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');

console.log(charmander);

// charmander.speak();
// charmander.scream();

console.log( charmander.getMoves());
