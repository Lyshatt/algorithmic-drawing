const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

const widthInput = document.getElementById('canvas-width');
const heightInput = document.getElementById('canvas-height');
const recursionDepthInput = document.getElementById('recursion-depth');
const xStartCoordinateInput = document.getElementById('start-x');
const yStartCoordinateInput = document.getElementById('start-y');
const lineLengthInput = document.getElementById('line-length');
const offsetAngleInput = document.getElementById('offset-angle');
const startAngleInput = document.getElementById('start-angle');
const lineLengthChangeFactorInput = document.getElementById('line-length-change-factor');
const startButton = document.getElementById('start-button')

widthInput.addEventListener('input', function () {
    canvas.width = widthInput.value;
    canvas.style.width = widthInput.value + 'px';
})

heightInput.addEventListener("input", function () {
    canvas.height = heightInput.value
    canvas.style.height = heightInput.value + 'px';
})

startButton.addEventListener("click", function () {
    const height = parseInt(heightInput.value);
    const recursionDepth = parseInt(recursionDepthInput.value);
    const xStartCoordinate = parseInt(xStartCoordinateInput.value);
    const yStartCoordinate = parseInt(yStartCoordinateInput.value);
    const lineLength = parseInt(lineLengthInput.value);
    const offsetAngle = parseInt(offsetAngleInput.value);
    const startAngle = parseInt(startAngleInput.value);

    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    const tree = new RecursiveTree(lineLength, offsetAngle, canvasContext);
    tree.draw(recursionDepth, xStartCoordinate, height - yStartCoordinate, startAngle);
})