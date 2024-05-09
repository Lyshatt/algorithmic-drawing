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
const angleChangeFactorInput = document.getElementById('angle-change-factor');
const delayInput = document.getElementById('delay');
const divisionsInput = document.getElementById('divisions');
const beautyModeInput = document.getElementById('beauty-mode');

const startButton = document.getElementById('start-button')
const presetsSelect = document.getElementById('presets');

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
    const lineLengthChangeFactor = parseFloat(lineLengthChangeFactorInput.value);
    const angleChangeFactor = parseFloat(angleChangeFactorInput.value);
    const delay = parseInt(delayInput.value);
    const divisions = parseInt(divisionsInput.value);
    const isBeautyMode = beautyModeInput.checked;

    // clear the canvas before drawing on it again
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    const tree = new RecursiveTree(lineLengthChangeFactor, angleChangeFactor, delay, divisions, isBeautyMode, canvasContext);
    tree.draw(offsetAngle, recursionDepth, xStartCoordinate, height - yStartCoordinate, startAngle, lineLength);
})

presetsSelect.addEventListener("change", function(event){
    alert('test1')

    if(event.target.value === '0') {
        alert('test2')

        widthInput.value = 600;
        heightInput.value = 500;
        recursionDepthInput.value = 6;
        xStartCoordinateInput.value = 300;
        yStartCoordinateInput.value = 190;
        lineLengthInput.value = 50;
        offsetAngleInput.value = 72;
        startAngleInput.value = 90;
        lineLengthChangeFactorInput.value = 1;
        angleChangeFactorInput.value = 1.7
        delayInput.value = 0;
        divisionsInput.value = 5;
        beautyModeInput.value = false;
    }
})