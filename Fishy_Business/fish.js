document.addEventListener('DOMContentLoaded', function() {
  const speed = 5,
        counter = document.querySelector('.counter');

  let count = 0,
    vw = window.innerWidth * 0.97,
    vh = window.innerHeight;

  function getAngle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range [-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range [-180, 180]
    theta += 90; // set 0 as top, range [-90, 270]
    if (theta > 180) theta = theta - 360; // range [-180, 180]
    theta = Math.floor(theta);
    return theta;
  }

  function setPos(el, x, y) {
    // old coords
    const a = window.scrollX + el.getBoundingClientRect().left;
    const b = window.scrollY + el.getBoundingClientRect().top;
    // distance
    const ax = Math.abs(a - x);
    const by = Math.abs(b - y);
    const dur = Math.floor(Math.sqrt((ax * ax) + (by * by))) * speed;
    // set new coords
    el.style.left = x + 'px';
    el.style.top = y + 'px';  
    // set duration
    el.style.transitionDuration = dur + 'ms';
    // set angle
    el.style.transform = 'rotate(' + getAngle(a, b, x, y) + 'deg)';
    setTimeout(function() {
      setRandomPos(el);
    }, dur);  
  }

  function setRandomPos(el) {  
    const randomX = Math.floor(Math.random() * vw);
    const randomY = Math.floor(Math.random() * vh);
    setPos(el, randomX, randomY);
  }

  function updateCount() {
    counter.innerHTML = '<i class="fas fa-fish mr-3"></i>' + count;
  }

  function createFish() {
    const fish = document.createElement('div');
    fish.setAttribute('href', '#');
    fish.className = 'fish';
    fish.textContent = '=';
    fish.style.filter = 'hue-rotate(' + Math.floor(Math.random() * 360) + 'deg)';
    document.body.appendChild(fish);
    setRandomPos(fish);
    count++;
    updateCount();
  }

  // Ensure counter is not null before adding event listener
  if (counter) {
    counter.addEventListener('click', createFish);
  } else {
    console.error('Counter element not found');
  }

});