import {
  Car,
  addCar,
  countCarsMadeInYear,
  getCarMake,
  isCarColorMatching,
  removeCarById,
  updateCarColor,
} from "./cars";

describe("Car Data Functions", () => {
  let cars: Car[];

  beforeEach(() => {
    cars = [
      { id: 401, make: "Toyota", model: "Camry", year: 2021, color: "Blue" },
      { id: 402, make: "Honda", model: "Civic", year: 2020, color: "Silver" },
      { id: 403, make: "Ford", model: "Mustang", year: 2019, color: "Red" },
      {
        id: 405,
        make: "Chevrolet",
        model: "Tahoe",
        year: 2022,
        color: "Black",
      },
      { id: 406, make: "Nissan", model: "Altima", year: 2020, color: "White" },
    ];
  });

  describe("getCarMake", () => {
    it("should return the make of the car", () => {
      expect(getCarMake(cars[0])).toBe("Toyota");
    });
    it("should return the make of the car", () => {
      expect(getCarMake(cars[1])).toBe("Honda");
    });
  });

  describe("isCarColorMatching", () => {
    it("should return true if car color matches the provided color", () => {
      for (let car of cars)
        expect(isCarColorMatching(car, car.color)).toBe(true);
    });
    it("should return false if car color does not match the provided color", () => {
      for (let car of cars)
        expect(isCarColorMatching(car, "Magenta")).toBe(false);
    });
  });

  describe("addCar", () => {
    it("should add a new car to the array and return the updated array, with the new car as the last element", () => {
      const newCar = {
        id: 407,
        make: "Kia",
        model: "Sorento",
        year: 2021,
        color: "Green",
      };

      const { id, make, model, year, color } = newCar;
      const updatedCars = addCar([...cars], id, make, model, year, color);
      expect(updatedCars).toContainEqual(newCar);
      expect(updatedCars.length).toBe(cars.length + 1);
      1;
      expect(updatedCars[updatedCars.length - 1]).toEqual(newCar);
    });
  });

  describe("countCarsMadeInYear", () => {
    it("should return the number of cars made in a specified year", () => {
      expect(countCarsMadeInYear(cars, 2020)).toBe(2);
    });
  });

  describe("removeCarById", () => {
    it("should remove a car by id and return the updated array without the car", () => {
      const updatedCars = removeCarById([...cars], 405);
      expect(updatedCars.some((car) => car.id === 405)).toBe(false);
      expect(updatedCars.length).toBe(cars.length - 1);
    });
  });

  describe("updateCarColor", () => {
    it("should update the color of the car with the given id and return the updated car", () => {
      const updatedCar = updateCarColor([...cars], 401, "Yellow");
      expect(updatedCar.color).toBe("Yellow");
    });
    it("should return 'No Car Found' if no car with the given id exists", () => {
      expect(updateCarColor(cars, 404, "Yellow")).toBe("No Car Found");
    });
  });
});
