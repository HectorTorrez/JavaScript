/*  Ejemplo de funcion, usando un parametro y retornando un valor */
const constanVariable = 'Test 2';


function letAsssingnation(value) {
    return value;
};

console.log(letAsssingnation(constanVariable));

/* Ejemplo de alcance (scope) de las variables */
// No se puede acceder a una variable con scope funcional desde afuera
if (true) {
    const funcionalScope = 'No se muestra';
    var globalScope = 'Si se muestra';
}

//console.log(globalScope, funcionalScope);

function readVariable() {
    // una variable global puede ser alterada por funciones al usar el mismo nombre
    var variableMod = 'Original';
    const scopedVariable = 'Unique';
}

function modVariable() {
    var variableMod = 'Original';
    let scopeVariable = 'Unique';
    console.log('modVariable log', functionScope, globalScope);
}

function udateVariable() {
    var functionScope = 'new'
    let globalScope = 'Second unique'
    modVariable();
    console.log('updateVariable log', funcionalScope, globalScope);
}

//Ejemplo de fujos de control

let lastCheck = false;
let incrementNumber = 0;

function addNumbre() {

    if (incrementNumber == 6) {
        incrementNumber++;
        console.log('Loop has finish the number is ' + incrementNumber);
        lastCheck = true;
    } else {
        incrementNumber++;

    }
}

do {
    addNumbre();
}
while (incrementNumber < 7)

//Ejemplo de fujos de control
const emptyArray = [];

function fillArray() {
    switch (emptyArray.length) {
        case 0:
            emptyArray.push('First')
            break;
        case 1:
            emptyArray.push('Second');
            break;
        case 2:
            emptyArray.push(3);
            break;
        case 3:
            emptyArray.push(4);
            break;
        case 4:
            emptyArray.push('finish');
            break;
    }
}

for (let i = 0; emptyArray.length < 5; i++) {
    fillArray();
}
console.log(emptyArray);

//Funcion de orden mayor
let funcCheck = true;

function checkConditional() {
    return funcCheck;
}

function returnValue(text) {
    return text + (funcCheck ? ': El check es cierto' : ': el check es falso');
}

function action(condition) {
    if (condition) {
        return returnValue('Este es el valor a retornar');
    } else {
        return returnValue('Esto se retorna cuando es falso')
    }
}

console.log(action(checkConditional()));
funcCheck = false;
console.log(action(checkConditional()));

//Ejemplo de objetos

const firstObject = {
    list: 'This is a list',
    number: 1,
    test: function() { checkConditional() }
}

console.log(firstObject);
console.log(firstObject.test());

const secondObject = new Object('Test'); //Crea un objeto en base al valor de string
console.log(secondObject);

class ObjectClass {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myName() {
        return this.name
    }
};

const newObject = new ObjectClass('Custom Object', 10);
console.log(newObject.myName());

function objectFunction(name, age) {
    return {
        name: name,
        age: age
    }
}
const funcObject = objectFunction('Second Custom Object', 20)
console.log(funcObject)