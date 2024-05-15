const makeInputEl = document.querySelector('#make');
const colorInputEl = document.querySelector('#color');
const modelInputEl = document.querySelector('#model');
const createCarButtonEl = document.querySelector('button');
const cars = [];
const carListUlEl = document.querySelector('#car-list');

createCarButtonEl.addEventListener('click', function(){
    const car = new Car(makeInputEl.value, colorInputEl.value, modelInputEl.value);
    cars.push(car);
    
    makeInputEl.value = '';
    colorInputEl.value = '';
    modelInputEl.value = '';
    const carEl = car.createCarElement();
    carListUlEl.appendChild(carEl);
})

carListUlEl.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})

class Car {
    constructor(make, color, model){
        this.make = make;
        this.model = model;
        this.isRunning = false;
        this.color = color;
        this.id = Car.nextCarId;
        Car.nextCarId +=1;
        this.price = this.getRandomPrice(20000, 30000);
    }

    getRandomPrice(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    formatPrice(price){
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price);
    }

    start(){
        //this refers to the object calling the method
        this.isRunning = true;
        console.log(`this ${this.make} is running!`);
    }

    //property that exists on the class itself - not on the new instance
    static nextCarId = 1

    stop(){
        this.isRunning = false;
        console.log(`this ${this.make} is has stopped!`);
    }
    createCarElement(){
        const carEl = document.createElement('li');
        carEl.innerText = `ID: ${this.id} | make: ${this.make} | model: ${this.model} | color: ${this.color} | price: ${this.formatPrice(this.price)}`;
        carEl.style.color = this.color;
        return carEl;
    }
}

const car1 = new Car('ford', 'bronco', 'green');
const car2 = new Car('tesla', 'Y', 'black');

class ElectricCar extends Car {
    constructor(make, model, color, batteryCharge) {
      super(make, model, color);
      this.batteryCharge = batteryCharge;
    }
    fly(){
        console.log('we have a flying car now!');
    }
  };
  
const electricCar = new ElectricCar('tesla', 'black', 'Y', 100)
console.log(electricCar);

const myFirstCar = {
    make: 'Toyota',
    model: 'Corolla',
    color: 'black',
}

const mySecondCar = {
    make: 'Buick',
    model: 'Sabre',
    color: 'blue',
}

// car1.start();
// car2.start();
// car1.stop();
// car2.stop();
// console.log(car1.make);
// console.log(car2.make);

// class Ghost {
//     constructor(color, speed){
//         this.color = color;
//         this.speed = speed;
//     }
// }

// //level one
// const ghost1 = new Ghost('red', 2);
// const ghost2 = new Ghost('blue', 2);
// const ghost3 = new Ghost('pink', 2);
// const ghost4 = new Ghost('yellow', 2);

// //level two
// const ghost1 = new Ghost('red', 4);
// const ghost2 = new Ghost('blue', 4);
// const ghost3 = new Ghost('pink', 4);
// const ghost4 = new Ghost('yellow', 4);
// const ghost5 = new Ghost('tan', 4);