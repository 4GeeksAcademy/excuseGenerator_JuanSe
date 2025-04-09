// This is the excuse generator
let who = [
  'The dog',
  'My grandma',
  'The mailman',
  'My bird',
  'A random raccoon',
  'My neighbor',
  'My little brother',
  'An alien',
  'My cat',
  'The ghost in my house'
];

let action = [
  'ate',
  'peed on',
  'crushed',
  'broke',
  'deleted',
  'hid',
  'set fire to',
  'threw away',
  'painted over',
  'teleported'
];

let what = [
  'my homework',
  'my phone',
  'the car',
  'my shoes',
  'the TV remote',
  'my favorite book',
  'my school project',
  'the computer',
  'the kitchen table',
  'the fridge'
];

let when = [
  'before the class',
  'when I was sleeping',
  'while I was exercising',
  'during my lunch',
  'while I was praying',
  'right after dinner',
  'in the middle of the night',
  'when I went to the bathroom',
  'just before I left the house',
  'while I was feeding the cat'
];

function generateExcuse() {
  let excuse = 
    who[Math.floor(Math.random() * who.length)] + ' ' +
    action[Math.floor(Math.random() * action.length)] + ' ' +
    what[Math.floor(Math.random() * what.length)] + ' ' +
    when[Math.floor(Math.random() * when.length)] + '.';

    document.getElementById('excuse').innerText = excuse;
    console.log(excuse);
    return excuse;
}
