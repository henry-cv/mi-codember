console.clear();
/*
Las operaciones del lenguaje son las siguientes:

"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.

*/
const descifrar = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";
let num=0;
let acumulada="";
const incrementar = ()=> num+=1;
const decrementar = ()=> num-=1;
const potenciar = () => num*=num;
const imprimir = ()=> console.log(num);

const operaciones = {
  "#": incrementar,
  "@": decrementar,
  "*": potenciar,
  "&": imprimir
}
console.log
const arr1= descifrar.split("");
console.log(`arr1: ${arr1}`);
arr1.forEach(e=>{
  if(e==="&") acumulada+=num
  operaciones[e]();
});
console.log(acumulada);
  