
// import { bulbasaur, pokemons } from './bases/02-objetcs';
// import {charmander} from './bases/03-classes';
// import {charmander, pikachu} from './bases/04-inyection';
// import {charmander, } from './bases/05-decorators';
import {charmander, } from './bases/06-decoratos2';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hellow ${ charmander.name } </h1>
`;

