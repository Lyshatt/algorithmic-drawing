// Declaration
class RecursiveTree {
    constructor(lineLengthChangeFactor, angleChangeFactor, delay, divisions, colorMode, canvasContext, maxRecursionDepth, startColor, endColor) {
        this.canvasContext = canvasContext;
        this.lineLengthChangeFactor = lineLengthChangeFactor;
        this.angleChangeFactor = angleChangeFactor;
        this.delay = delay;
        this.colorMode = colorMode;
        this.divisions = divisions;
        this.maxRecursionDepth = maxRecursionDepth;
        this.startColor = startColor;
        this.endColor = endColor;
    }

    draw(angleDelta, iterationCount, currentXPosition, currentYPosition, angle, lengthOfLines) {
        if (iterationCount > 0) {
            let color;

            if(this.colorMode === '1') {
                canvasContext.lineWidth = iterationCount !== 1 ? iterationCount * 2 : 10;
                color = iterationCount !== 1 ? '#614126' : '#2d800f';
            } else if (this.colorMode === '2') {
                canvasContext.lineWidth = 1;
                color = this.calculateNextColor(this.startColor, this.endColor, 1 - iterationCount / this.maxRecursionDepth);
            } else {
                canvasContext.lineWidth = 1;
                color = '#000000';
            }

            canvasContext.strokeStyle = color;

            let [nextXPosition, nextYPosition] = this.calculateNextCoordinates(currentXPosition, currentYPosition, angle, lengthOfLines);

            this.canvasContext.beginPath();
            this.canvasContext.moveTo(currentXPosition, currentYPosition);
            this.canvasContext.lineTo(nextXPosition, nextYPosition);
            this.canvasContext.stroke();

            const angleToStart = angleDelta * (this.divisions - 1) / 2;

            const that = this;

            for(let i = 0; i < this.divisions; i++) {
                setTimeout(function () {
                    that.draw(angleDelta * that.angleChangeFactor,iterationCount - 1, nextXPosition, nextYPosition, (angle - angleToStart + angleDelta * i), lengthOfLines * that.lineLengthChangeFactor, color);
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

    calculateNextColor = function (startColor, endColor, multiplier) {
        // Remove the '#' if it's present
        startColor = startColor.replace('#', '');
        endColor = endColor.replace('#', '');

        // Convert the start and end colors to RGB
        var startR = parseInt(startColor.substring(0, 2), 16);
        var startG = parseInt(startColor.substring(2, 4), 16);
        var startB = parseInt(startColor.substring(4, 6), 16);

        var endR = parseInt(endColor.substring(0, 2), 16);
        var endG = parseInt(endColor.substring(2, 4), 16);
        var endB = parseInt(endColor.substring(4, 6), 16);

        // Calculate the intermediate color
        var r = Math.min(255, Math.round(startR + (endR - startR) * multiplier));
        var g = Math.min(255, Math.round(startG + (endG - startG) * multiplier));
        var b = Math.min(255, Math.round(startB + (endB - startB) * multiplier));

        // Convert the intermediate RGB back to hexadecimal
        var hex = '#' + (r < 16 ? '0' : '') + r.toString(16) +
            (g < 16 ? '0' : '') + g.toString(16) +
            (b < 16 ? '0' : '') + b.toString(16);

        return hex;
    }
}
