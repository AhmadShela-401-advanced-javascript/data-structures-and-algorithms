/* eslint-disable no-unused-vars */
'use strict';

const animalShelter = require('./fifo-animal-shelter').AnimalShelter;
const Animal = require('./fifo-animal-shelter').Animal;

// Pet Instances
let dog1 = new Animal('dog', 'Dog1');
let dog2 = new Animal('dog', 'Dog2');
let dog3 = new Animal('dog', 'Dog3');
let dog4 = new Animal('dog', 'Dog4');
let dog5 = new Animal('dog', 'Dog5');

let cat1 = new Animal('cat', 'cat1');
let cat2 = new Animal('cat', 'cat2');
let cat3 = new Animal('cat', 'cat3');
let cat5 = new Animal('cat', 'cat4');

describe('FIFO Animal Shelter Challenge', () => {
  describe('Enqueue()', () => {

    it('when run with value, expect each value to go to end of queue', () => {
      let animalShelter = new animalShelter();

      animalShelter.enqueue(dog1);
      animalShelter.enqueue(dog2);
      animalShelter.enqueue(cat1);
      animalShelter.enqueue(dog3);
      animalShelter.enqueue(cat2);
      animalShelter.enqueue(cat3);

      expect(animalShelter.queue[animalShelter.queue.length - 1].name).toBe(cat3.name);
    });

  });

  describe('Dequeue()', () => {

    it('when run empty it should return animal first in queue and list modified', () => {
      let animalShelter = new animalShelter();
      animalShelter.enqueue(dog1);
      animalShelter.enqueue(dog2);
      animalShelter.enqueue(cat1);
      animalShelter.enqueue(dog3);
      animalShelter.enqueue(cat2);
      animalShelter.enqueue(cat3);
      let animal = animalShelter.dequeue();

      expect(animalShelter.queue.length).toBe(5);
    });

    it('when run with dog preference, it should return first dog in queue', () => {
      let animalShelter = new animalShelter();
      animalShelter.enqueue(cat1).enqueue(cat2).enqueue(cat3).enqueue(dog1).enqueue(dog2);
      let animal = animalShelter.dequeue('dog');
      expect(animal).toBe(dog1);
    });

    it('when run with cat preference, it should return first cat from queue', () => {
      let animalShelter = new animalShelter();
      animalShelter.enqueue(dog1).enqueue(dog2).enqueue(dog4).enqueue(dog5).enqueue(cat5);
      let animal = animalShelter.dequeue('cat');

      expect(animal).toBe(cat5);
    });
    
  });
});