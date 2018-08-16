Number.prototype.mapRange = mapRange;

var sides = Array.prototype.slice.call(document.querySelectorAll('.side'));
var bodyHeight = document.body.offsetHeight;
var screenHeight = window.innerHeight;
var screenTop = window.pageYOffset;
var screenBottom = screenTop + screenHeight;
var screenCenter = screenTop + screenHeight / 2;
var isWaiting = false;
setVisibleElements();

window.addEventListener('scroll', treatScrool);


function treatScrool() {
    screenTop = window.pageYOffset;
    screenBottom = screenTop + screenHeight;
    screenCenter = screenTop + screenHeight / 2;
    if (isWaiting) {
        console.log("pulou")
        return;
    }
    isWaiting = true;
    requestAnimationFrame(setVisibleElements);
}

function setVisibleElements() {
    sides.forEach(setVisibleElement);
    isWaiting = false;
}

function mapRange(fromOri, toOrig, fromDest, toDest) {
    var value = this.valueOf() - fromOri;
    var scaleOrigin = toOrig - fromOri;
    var scaleDestination = toDest - fromDest;
    var fator = scaleDestination / scaleOrigin;
    return (value * fator) + fromDest;
}

function trashHold(value, limit) {
    return value >= limit ? value : limit;
}

function setVisibleElement(item) {
    var itemTop = item.offsetTop;
    var itemBottom = item.offsetTop + item.offsetHeight;
    var itemCenter = item.offsetTop + item.offsetHeight / 2;
    var limitTrashHold = 270;
    var variation = trashHold(Math.abs(screenCenter - itemCenter), limitTrashHold);
    var translateValue = (-variation.mapRange(limitTrashHold, bodyHeight, 0, 2000));
    item.style.transform = 'translateX(' + parseInt(translateValue) + 'px)';

}