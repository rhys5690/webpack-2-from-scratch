require('./styles.scss');

class Car {
  manufacture(car) {
    document.write(`I have a ${car}`);
  }
}

const bmw = new Car;
bmw.manufacture('bmw');
