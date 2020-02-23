let car = {
    color: 'red',
    make: 'Mitsubishi',
    year: '2020'
}

Object.defineProperty(car, 'fullInfo', {
    get: () => {
        return car.year + ' ' + car.color + ' ' + car.make;
    },

    set: function (value) {
        let carParts = value.split(' ');
        car.year = carParts[0];
        car.color = carParts[1];
        car.make = carParts[2];
    },

    enumerable: false
});


car.fullInfo = '2017 gray Mazda';
console.log(car.fullInfo);