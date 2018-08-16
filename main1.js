var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('banner-visible');
        } else {
            entry.target.classList.remove('banner-visible');
        }
    });
});

Array.prototype.slice.call(document.querySelectorAll('.banner')).forEach(function (element) {
    observer.observe(element);
});