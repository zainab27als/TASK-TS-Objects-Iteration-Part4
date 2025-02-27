interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
}

/**
 * You can use this array
 * to manually test your code
 */
const cars: Car[] = [
  {
    id: 401,
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "Blue",
  },
  {
    id: 402,
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "Silver",
  },
  {
    id: 403,
    make: "Ford",
    model: "Mustang",
    year: 2019,
    color: "Red",
  },
  {
    id: 405,
    make: "Chevrolet",
    model: "Tahoe",
    year: 2022,
    color: "Black",
  },
  {
    id: 406,
    make: "Nissan",
    model: "Altima",
    year: 2020,
    color: "White",
  },
];

// 1) Write a `getCarMake` function that accepts a `car` object, return the make (brand) of the car
function getCarMake(car: Car): string {
  // write your code here...
  return "horse";
}
// console.log(getCarMake(cars[0])); // Outputs: Toyota

// 2) Write a `isCarColorMatching` function that accepts `car` object and `color` string arguments, return true if the car's color matches the provided color, otherwise returns false
function isCarColorMatching(car: Car, color: string): boolean {
  // write your code here...
  return false;
}
// console.log(isCarColorMatching(cars[1], "Blue")); // Outputs: false

// 3) Write a `addCar` function that accepts an array of car objects `cars` and the properties of a car,  create a new car object and add it to the array of cars, and return the updated array
function addCar(
  cars: Car[],
  id: number,
  make: string,
  model: string,
  year: number,
  color: string
): Car[] {
  // write your code here...
  return [];
}
// console.log(addCar(cars, 406, "Kia", "Sorento", 2021, "Green"));

// 4) Write a `countCarsMadeInYear` function that accepts an array cars objects `cars` and a manufacturing year `year` in numbers, return the number of cars made in the specified year
function countCarsMadeInYear(cars: Car[], year: number): number {
  // write your code here...
  return -Infinity;
}
// console.log(countCarsMadeInYear(cars, 2020)); // Outputs: 2

// 5) Write a `removeCarById` function that accepts an array of cars objects `cars` and an `id` of number, remove the car with matching id from the array, and return the updated array.
function removeCarById(cars: Car[], id: number): Car[] {
  // write your code here...
  return [];
}
// console.log(removeCarById(cars, 404));

// 6) Write a `updateCarColor` function that accepts the following arguments: an array of car objects `cars`, an `id` (number) and a `newColor` (string), updates the color of the car with the given id to the new color. and return the updated car object. If no car is found with the given id, return "No Car Found".
function updateCarColor(cars: Car[], id: number, newColor: string): Car {
  // write your code here...
  return cars[0];
}
// console.log(updateCarColor(cars, 401, "Yellow"));

export {
  Car,
  getCarMake,
  isCarColorMatching,
  addCar,
  countCarsMadeInYear,
  removeCarById,
  updateCarColor,
};
