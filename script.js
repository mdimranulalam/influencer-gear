function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
const obj = document.getElementById("sales");
const ins = document.getElementById("insta");
const ytd = document.getElementById("ytd");
const fb = document.getElementById("fb");
animateValue(obj, 9999, 98865, 1300);
animateValue(ins, 5, 768, 1300);
animateValue(ytd, 5, 630, 1300);
animateValue(fb, 5, 976, 1300);

