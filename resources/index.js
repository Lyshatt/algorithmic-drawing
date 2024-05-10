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

widthInput.addEventListener('change', function () {
    canvas.width = widthInput.value;
    canvas.style.width = widthInput.value + 'px';
})

heightInput.addEventListener("change", function () {
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

presetsSelect.addEventListener("change", function(event) {
    if (event.target.value === '0') {
        widthInput.value = 600;
        heightInput.value = 500;
        recursionDepthInput.value = 7;
        xStartCoordinateInput.value = 300;
        yStartCoordinateInput.value = 0;
        lineLengthInput.value = 80;
        offsetAngleInput.value = 25;
        startAngleInput.value = 90;
        lineLengthChangeFactorInput.value = 0.9;
        angleChangeFactorInput.value = 1.1;
        delayInput.value = 0;
        divisionsInput.value = 3;
        beautyModeInput.checked = true;
    } else if (event.target.value === '1') {
        widthInput.value = 600;
        heightInput.value = 500;
        recursionDepthInput.value = 6;
        xStartCoordinateInput.value = 300;
        yStartCoordinateInput.value = 190;
        lineLengthInput.value = 50;
        offsetAngleInput.value = 72;
        startAngleInput.value = 90;
        lineLengthChangeFactorInput.value = 1;
        angleChangeFactorInput.value = 1.7;
        delayInput.value = 0;
        divisionsInput.value = 5;
        beautyModeInput.checked = false;
    } else if (event.target.value === '2') {
        widthInput.value = 600;
        heightInput.value = 500;
        recursionDepthInput.value = 4;
        xStartCoordinateInput.value = 300;
        yStartCoordinateInput.value = 210;
        lineLengthInput.value = 40;
        offsetAngleInput.value = 36;
        startAngleInput.value = 90;
        lineLengthChangeFactorInput.value = 1.8;
        angleChangeFactorInput.value = 0.4
        delayInput.value = 0;
        divisionsInput.value = 10;
        beautyModeInput.checked = false;
    } else if (event.target.value === '3') {
        widthInput.value = 400;
        heightInput.value = 400;
        recursionDepthInput.value = 11;
        xStartCoordinateInput.value = 200;
        yStartCoordinateInput.value = 150;
        lineLengthInput.value = 50;
        offsetAngleInput.value = 180;
        startAngleInput.value = 90;
        lineLengthChangeFactorInput.value = 1;
        angleChangeFactorInput.value = 1;
        delayInput.value = 0;
        divisionsInput.value = 2;
        beautyModeInput.checked = false;
    } else if (event.target.value === '4') {
        widthInput.value = 600;
        heightInput.value = 500;
        recursionDepthInput.value = 11;
        xStartCoordinateInput.value = 300;
        yStartCoordinateInput.value = 200;
        lineLengthInput.value = 50;
        offsetAngleInput.value = 120;
        startAngleInput.value = 90;
        lineLengthChangeFactorInput.value = 1;
        angleChangeFactorInput.value = 1;
        delayInput.value = 0;
        divisionsInput.value = 2;
        beautyModeInput.checked = false;
    }

    const changeEvent = new Event('change');
    widthInput.dispatchEvent(changeEvent);
    heightInput.dispatchEvent(changeEvent);
})