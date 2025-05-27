
function calculateArea(length, width) {
  return length * width;
}

function calculatePerimeter(length, width) {
  return 2 * (length + width);
}

let length = 5;
let width = 3;

let area = calculateArea(length, width);
let perimeter = calculatePerimeter(length, width);

console.log(`Area: ${area}`);
console.log(`Perimeter: ${perimeter}`);
