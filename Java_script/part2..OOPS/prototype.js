let computer = {cpu:12}
let lenvo = {screen:"HD",__proto__:computer}
let tomhardware = {}

//run in browser
console.log(`computer`, computer.__proto__)

let genricCar = {tyres:4}

let tesla = {
    driver: 'AI'
}

Object.setPrototypeOf(tesla,genricCar)

console.log(`tesla` , Object.getPrototypeOf(tesla))