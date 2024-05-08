const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

let lengthOfLines = 30;
let angleDelta = 15

let currentXPosition = 250;
let currentYPosition = 500;
let angle = 90;
let iterationCount = 10;

const tree = new RecursiveTree(lengthOfLines, angleDelta, canvasContext);
tree.draw(iterationCount, currentXPosition, currentYPosition, angle);