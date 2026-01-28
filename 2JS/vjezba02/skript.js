// varijabla je prostor u memoriji
// može biti različitih tipova podataka
//u JS ES6pdsotoji tri načina definiranja varijbali 

const ime = prompt('Unesi svoje ime');
//simuliram da je svaki puta s pomoću uneseno prompt Ivan 
//a ja to radim da ne moram svaki puta unositi 

console.log(typeof ime, ime );
 
console.log(`Dobar dan ${ime}`);

const unosGodina = '2026'; // simuliram unos kroz promt

// konverzija podataka 

const godina = Number(unosGodina);

console.log(typeof godina, godina+1);// ovdje uvećana za 1 

console.log(typeof unosGodina, unosGodina+1);// ovdje se za stringu 20

const cijeliBroj = parseInt('7');

console.log(typeof cojeliBroj, cijeliBroj);

const decimalniBroj = parseFloat('3,14'); // za decimalnoi dio se piše 


console.log(typeof decimalniBroj, decimalniBroj);

//logična vrijednost

const logickaVrijednost = true; // ili false

console.log(typeof logickaVrijednost, logickaVrijednost);

//const se ne može mijenjati
//logickaVrijednost = false;  ovo se nemože Uncaught TypeError: Assignment to constant variable.

// ne može se redklarirati varijable - prvi način let


let broj = 7;
console.log(typeof broj, broj);
// let može promjeniti tip podataka
broj = '7';
console.log(typeof broj, broj);

//ne može se deklarirati 

//let broj = true;

//STARO , ne koristiti - što ne znači da ne postoji 
var x=8;
console.log(typeof x, x);
x='8';
console.log(typeof x, x);
var x='8';
console.log(typeof x, x);

const velikiBroj= 9348453673;
console.log(typeof velikiBroj, velikiBroj);

// nemogu deklaririati konstatnu bez vrijednosti
//const i;

let i;  
console.log (typeof i, i);

i=7;
console.log(typeof i, i);

let o = null;
console.log(typeof o, o);

o = 8;
console.log(typeof o, o);
 
//JSON - JavaScript Object Notation

o = {
    id: 1001,
    ime:'Pero',
    prezime:'Perić',
    znaProgramirati: false
    

};
console.log(typeof o,o);

console.table(o);

let niz = [2,2,3,2,2]; // ALTGR+F +daje [
console.log(typeof niz, niz); // kaže da je object
console.table(niz);

const backend = [   
    {
        id:1,
        ime:'Marina',
        prezime:'Generacija',
        znaProgramirati: true

    },
{
    id:2,
    ime:'Karlo',
    prezime:'Katić',
    znaProgramirati: false
},
{
    id:3,
    ime:'Maja',
    prezime:'Katić',
    znaProgramirati: false
   } 
];

console.log(typeof backend, backend);
console.table(backend);


function pozdrav(){
    console.log('Pozdrav 1');

}

console.log(typeof pozdrav, pozdrav);
//poziv funckije
pozdrav();

const pozdravi = ()=> console.log('Pozdravi');
console.log(typeof pozdravi, pozdravi);
pozdravi();

const kompleksnije = (x,y) => {
        x= x+3 ; //x = 5
        y = --y + x; // y = 6
        return x+y;


};

console.log(kompleksnije(2,2));

const id1 = Symbol('edunova'); //edunova je opis,ali je vrijednost jedinstvena i mi je neznamo
const id2 = Symbol('edunova');


console.log(typeof id1, id1);

//operator uspoređivanja 
// == probjerava samo po vrijednosti '2' je isto što i ovo 2 
// ===   => provjerava po tipu i po vrijednosti '2' nije isto što i 2

console.log(id1 == id2);
console.log(id1 === id2);







