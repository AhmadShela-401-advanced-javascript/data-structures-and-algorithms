/* eslint-disable indent */
'use strict';
class Animal {
    constructor(type, petName) {
        this.kind = type;
        this.name = petName;
    }
}

class AnimalShelter {
    constructor() {
        this.queue = new Array();
    }


    dequeue(val) {
        let deletedValue = val && val.toLowerCase() || null;
        let i = 0;
        if (deletedValue) {
            while (this.queue[i].type !== deletedValue) {
                i++;
            }
        }

        let animal = this.queue[i];

        let newQueue = [];
        let length = 0;

        for (let j = 0; j < this.queue.length; j++) {
            if (j !== i) {
                newQueue[length] = this.queue[j];
                length++;
            }
        }
        this.queue = newQueue;
        return animal;
    }
    enqueue(animal) {
        if (!animal && typeof animal !== 'string') { throw 'Not Pet Given'; }
        this.queue[this.queue.length] = animal;
        return this;
    }
}
module.exports = { Animal, AnimalShelter };