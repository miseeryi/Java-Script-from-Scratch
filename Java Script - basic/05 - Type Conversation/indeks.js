let x = "pizza"; 
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log( x, typeof x);
console.log( y, typeof y);
console.log( z, typeof z);

let a = "0"; 
let b = "0";
let c = "0"; // klo didalam string kosong maka akan false

a = Number(a);
b = String(b);
c = Boolean(c); //selagi ada isi maka true

console.log( a, typeof a);
console.log( b, typeof b);
console.log( c, typeof c);

let d = ""; 
let e = "";
let f = "";

d = Number(d);
e = String(e);
f = Boolean(f);

console.log( d, typeof d);
console.log( e, typeof e);
console.log( f, typeof f);