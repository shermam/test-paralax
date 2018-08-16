var sides = document.querySelectorAll('.side');
var bodyHeight = document.body.offsetHeight;
var screenHeight = window.innerHeight;
var screenTop = window.scrollY;
var screenBottom = screenTop + screenHeight;
var isWaiting = false;
setVisibleElements();

document.addEventListener('scroll', treatScrool);

function treatScrool() {
    screenTop = window.scrollY;
    screenBottom = screenTop + screenHeight;
    if (isWaiting) return;
    isWaiting = true;
    requestAnimationFrame(setVisibleElements);
}

function setVisibleElements() {
    sides.forEach(setVisibleElement);
    isWaiting = false;
}

function setVisibleElement(item) {
    var top = item.offsetTop;
    var bottom = item.offsetTop + item.offsetHeight;
    //console.log(screenTop);

    if (bottom < screenBottom && top > screenTop) {
        if (!item.isOnScreen) {
            //console.log(true);
            item.classList.add('side-visible');
        }
        item.isOnScreen = true;

    } else if (item.isOnScreen) {
        item.isOnScreen = false;
        //console.log(false);
        item.classList.remove('side-visible');
    }
}