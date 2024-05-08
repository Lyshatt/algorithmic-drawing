// Declaration
class RecursiveTree {
    constructor(lineLengthChangeFactor, angleChangeFactor, delay, divisions, isBeautyMode, canvasContext) {
        this.canvasContext = canvasContext;
        this.lineLengthChangeFactor = lineLengthChangeFactor;
        this.angleChangeFactor = angleChangeFactor;
        this.delay = delay;
        this.isBeautyMode = isBeautyMode;
        this.divisions = divisions;
    }

    draw(angleDelta, iterationCount, currentXPosition, currentYPosition, angle, lengthOfLines) {
        if (iterationCount > 0) {
            if(this.isBeautyMode) {
                canvasContext.lineWidth = iterationCount !== 1 ? iterationCount * 2 : 10;
                canvasContext.strokeStyle = iterationCount !== 1 ? '#614126' : '#2d800f';
            }

            let [nextXPosition, nextYPosition] = this.calculateNextCoordinates(currentXPosition, currentYPosition, angle, lengthOfLines);

            this.canvasContext.beginPath();
            this.canvasContext.moveTo(currentXPosition, currentYPosition);
            this.canvasContext.lineTo(nextXPosition, nextYPosition);
            this.canvasContext.stroke();

            const angleToStart = angleDelta * (this.divisions - 1) / 2;

            const that = this;

            for(let i = 0; i < this.divisions; i++) {
                setTimeout(function () {
                    that.draw(angleDelta * that.angleChangeFactor,iterationCount - 1, nextXPosition, nextYPosition, (angle - angleToStart + angleDelta * i), lengthOfLines * that.lineLengthChangeFactor);
                }, this.delay)
            }
        }
    }

    calculateNextCoordinates = function (x1, y1, angleDegrees, radius) {
        // Convert angle from degrees to radians
        const angleRadians = angleDegrees * Math.PI / 180;

        // Calculate change in x and y coordinates
        const deltaX = radius * Math.cos(angleRadians);
        const deltaY = radius * Math.sin(angleRadians);

        // Calculate second set of coordinates
        const x2 = x1 + deltaX;
        const y2 = y1 - deltaY;

        return [Math.round(x2), Math.round(y2)];
    }
}
