// Declaration
class RecursiveTree {
    constructor(angleDelta, lineLengthChangeFactor, leftBranchDelay, rightBranchDelay, canvasContext) {
        this.angleDelta = angleDelta;
        this.canvasContext = canvasContext;
        this.lineLengthChangeFactor = lineLengthChangeFactor;
        this.leftBranchDelay = leftBranchDelay;
        this.rightBranchDelay = rightBranchDelay;
    }
    draw(iterationCount, currentXPosition, currentYPosition, angle, lengthOfLines) {
        if(iterationCount > 0) {
            let [nextXPosition, nextYPosition] = this.calculateNextCoordinates(currentXPosition, currentYPosition, angle, lengthOfLines);
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(currentXPosition, currentYPosition);
            this.canvasContext.lineTo(nextXPosition, nextYPosition);
            this.canvasContext.stroke();

            const that = this;

            setTimeout(function ()  {
                that.draw(iterationCount - 1, nextXPosition, nextYPosition, angle + that.angleDelta, lengthOfLines * that.lineLengthChangeFactor);
            }, this.leftBranchDelay);

            setTimeout(function ()  {
                that.draw(iterationCount - 1, nextXPosition, nextYPosition, angle - that.angleDelta, lengthOfLines * that.lineLengthChangeFactor);
            }, this.rightBranchDelay);
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
