// Declaration
class RecursiveTree {
    constructor(lengthOfLines, angleDelta, canvasContext) {
        this.lengthOfLines = lengthOfLines;
        this.angleDelta = angleDelta;
        this.ctx = canvasContext;
    }
    draw(iterationCount, currentXPosition, currentYPosition, angle) {
        if(iterationCount > 0) {
            let [nextXPosition, nextYPosition] = this.calculateNextCoordinates(currentXPosition, currentYPosition, angle, this.lengthOfLines);
            this.ctx.beginPath();
            this.ctx.moveTo(currentXPosition, currentYPosition);
            this.ctx.lineTo(nextXPosition, nextYPosition);
            this.ctx.stroke();

            const that = this;

            setTimeout(function ()  {
                that.draw(iterationCount - 1, nextXPosition, nextYPosition, angle + that.angleDelta);
            }, 250);

            setTimeout(function ()  {
                that.draw(iterationCount - 1, nextXPosition, nextYPosition, angle - that.angleDelta);
            }, 2000);

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
