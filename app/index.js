let a = `hey`;
let c = "sdf"
let b = `${a} ${c} ho`

let arr = [1, 2, 3];
let [one, , , three] = arr;

let obj = { name: "simba", kids: 123, height: 111 };
let { name, heigh } = obj;

let func = (n) => n * 2;
let doubled = [1, 2, 3].map(func);

let x = Math.pow(2, 60);
let p = 15;

export { p, func };

function Animal(name) {
    this.name = name;
}

let pet = new Animal("indie");
Animal.prototype.age = 6;
Animal.prototype.info =  function() { console.log(`name: ${this.name} age: ${this.age}`) };
pet.info();
