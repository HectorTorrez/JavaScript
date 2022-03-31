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

//Ejemplo de encapsulacion

function objectFact() {
    let _name = 'Test';
    let _age = 10;
    return {
        height: '160cm',
        name: function() {
            return _name;
        },
        age: function() {
            return _age;
        },
    }
}

const funcObjectEncap = objectFact();
console.log(funcObjectEncap.age());

//clousure

function clousure1() {
    const _height = '160cm';
    const _rank = 'Sr.';
    const privateFunct = function() {
        console.log('Hola');
    }
    return function(id) {
        if (id < 1) {
            console.log('No hay nadie registrado');
        } else {
            return {
                name: 'Sr. Nicolas',
                age: 56,
                info: function() {
                    privateFunct();
                    console.log('Mi rango es ' + _rank, 'Mi altura es ' + _height);
                }
            }
        }
        return {

        }
    }
};

const human = clousure1(null, 0);
console.log(human(4).info());

//Metodos
const objecWitHMethods = {
    name: 'Rick',
    age: 10,
    greet: function(name) {
        return 'Hola' + name + ', mi nombre es ' + this.name;
    },
    aboutMe: function(info) {
        return () => {
            if (10 > info) {
                return 'Hola señor, mi nombre es ' + this.name;
            } else {
                return 'Hola! mi nombre es ' + this.name;
            }
        }
    }
}

console.log(objecWitHMethods.aboutMe()(1));

const catPrototype = {
    name: 'Tom',
    sex: 'M',
    age: 4,
    miau() {
        console.log(this.name)
    }
};

const tom = Object.create(catPrototype);
tom.name = 'Lucas';
console.log(tom.miau());

//Poliforfismo

const shape = {
    height: 0,
    width: 0,
    area() {

    }
}

const triangle = Object.create(shape);
triangle.height = 10;
triangle.width = 4;
triangle.area = function() {
    return (this.height * this.width) / 2
}

const rectangle = Object.create(shape);
rectangle.height = 10;
rectangle.width = 4;
rectangle.area = function() {
    return this.heght * this.width;
}
rectangle.name = 'Rectangulo nuevo';
console.log(triangle.area(), rectangle.area(), rectangle.name);


class Tree {
    _height;
    _age;
    _multiplier;
    constructor(height, age) {
        this._height = height;
        this._age = age;
        this._multiplier = this._multiplier * 0.5;
    }
    get age() {
        return this._age;
    }

    set age(newAge) {
        this._age = newAge;
    }

    get currentHeight() {
        return this._heigth * this._age * this._multiplier;
    }

    static doc() {
        return 'Esta es la clase prototipo para un arbol basico';
    }
}

console.log(Tree.doc())

const appleTree = new Tree(5, 1);
console.log(appleTree.age, appleTree.currentHeight);

appleTree.age = 10;
console.log(appleTree.currentHeight)