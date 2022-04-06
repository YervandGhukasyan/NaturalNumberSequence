const NaturalNumberSequence = require('./NaturalNumberSequence')
const arr = [4, 100, 10, -1,1000, 99, 2, 5, 3, 1];
const obj = new NaturalNumberSequence();
console.log(obj.findMissNumberSequence(arr));