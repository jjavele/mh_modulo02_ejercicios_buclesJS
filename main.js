/*//EJERCICIO 01

console.log("EJERCICIO 01");

let tableNumber = Number(prompt("Ingrese el número a obtener en tabla de multiplicar"));

console.log(`Tabla de multiplicar del ${tableNumber}:`);
for(let i=1 ; i<=10 ; i++){    
    console.log(`${tableNumber} X ${i} = ${tableNumber*i}`);
}

//EJERCICIO 02

 console.log("EJERCICIO 02");

 let numberSeries = [];
 let numberBreaker = 0;
 let newNumber;

 while(newNumber != numberBreaker){
     newNumber = Number(prompt("Ingrese un número al azar del 1 al 100"));
     numberSeries.push(newNumber);
     console.log(numberSeries);
}

//EJERCICIO 03

console.log("EJERCICIO 03");

let incognitNumber = numberSeries[numberSeries.length - 2];
// console.log(incognitNumber);

// let incognitNumber = 4;
let ingresedNumber;
let tryes = 0;

while(ingresedNumber != incognitNumber){
    ingresedNumber = Number(prompt("Intente adividar un número al azar del 1 al 100"))
    tryes += 1;
    if(ingresedNumber > incognitNumber){
        console.log("Debe ingresar un número menor")
        }else{
            console.log("Debe ingresar un número mayor")
        }   
}
console.log(`Felicidades, ha adivinado el número incognita. El número es: ${ingresedNumber}. Usted ha tenido ${tryes} intentos.`);

//EJERCICIOS 04

console.log("EJERCICIO 04");

let number = Number(prompt("Ingrese un número para conocer sus divisores"))
let divisores = [];

for (let i=1 ; i<=number ; i++){
    if(number % i == 0){
        divisores.push(i);
    }   
}
console.log(`Los divisores de ${number} son: ${divisores}.`);

//EJERCICIO 05:

console.log("EJERCICIO 05");

let names = ["jose", "maria", "juan", "pedro", "diego", "carlos", "elisa", "caro", "sofia", "luisa"];
// console.log(names)

for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}

//EJERCICIO 06:

console.log("EJERCICIO 06");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers)

for(let i = 0; i<names.length; i++){
    console.log(numbers[i] * 2);
}

//EJERCICIO 7:

console.log("EJERCICIO 07");

let family = [
    {   
        identificator: "papa",
        age: 60,
        height: 180,
        weight: 80,
        idNumber: 12345
    },
    {   
        identificator: "mama",
        age: 58,
        height: 170,
        weight: 70,
        idNumber: 67891
    },
    {   
        identificator: "hijo1",
        age: 23,
        height: 182,
        weight: 75,
        idNumber: 11121
    },
    {   
        identificator: "hijo2",
        age: 21,
        height: 188,
        weight: 83,
        idNumber: 31415
    }
]

console.log("Presentación de Familia:")
for(let i=0; i<family.length; i++){
    console.log(`El miembro "${family[i].identificator}" de la familia, con número de identificaión: ${family[i].idNumber}, tiene ${family[i].age} años de edad, ${family[i].height}cm de altura y pesa ${family[i].weight} kg.`)
}

//EJERCICIO 9:

console.log("EJERCICIO 09");

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0 ; i<numbers2.length; i++){
    if(numbers2[i] % 2 != 0){
        console.log(numbers2[i]);
    }
}

//EJERCICIO 10:

console.log("EJERCICIO 10");

let parNumbers = [];
let imparNumbers = [];
let breakNumber = 0;
let numbersToSee;

console.log("Para interrumpir el programa, presiona 0");
while(breakNumber != numbersToSee){
    numbersToSee = Number(prompt("Ingrese un número"));
    if(numbersToSee%2 != 0){
        imparNumbers.push(numbersToSee);
    }else{
        parNumbers.push(numbersToSee);
    }
}

console.log(`Los números pares ingresados son: ${parNumbers}`);
console.log(`Los números impares ingresados son: ${imparNumbers}`);*/

//EJERCICIO 11:

console.log("EJERCICIO 11");

let tenNumbers = [150, 20, 3, 4, 5, 6, 40, 8, 100, 10];
let biggerNumber = tenNumbers[0];

for(let i=1 ; i<tenNumbers.length ; i++){
    if(tenNumbers[i] > biggerNumber){
        biggerNumber = tenNumbers[i]; 
    }
}

console.log(`El número más grande del array es: ${biggerNumber}`);  








