import superheroes from './superheroes.json';

console.log(superheroes);


/* import generateName from 'sillyname';

import generateName from 'sillyname';
var sillyname = generateName();

console.log(`My name is ${sillyname}`); */

// import superheroes from "superheroes";
import superheroes from 'superheroes';

const name = superheroes.random();
console.log(`I am ${name}!`);

