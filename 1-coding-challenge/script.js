let royMass = prompt('mass?:');
let royHeight = prompt('height?:');
let zerchMass = prompt('another mass:');
let zerchHeight = prompt('height?:');

let royBMI = royMass / (royHeight * royHeight);

let zerchBMI = zerchMass / (zerchHeight * zerchHeight);

let bigger = royBMI > zerchBMI;

console.log('is zerch bigger than roy?:', bigger)