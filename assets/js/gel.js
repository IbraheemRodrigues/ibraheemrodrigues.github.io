document.querySelectorAll(".card").forEach(function (el) {
  var color = Math.floor(Math.random() * 360);
  el.style.setProperty("--gel-color", `hsla(${color}, 100%, 50%, 0.3)`);
  el.style.setProperty("--border-color", `hsl(${color}, 100%, 50%)`);
});

document.querySelectorAll(".highlighter-rouge").forEach(function (el) {
  var color = Math.floor(Math.random() * 360);
  el.style.setProperty("--gel-color", `hsla(${color}, 100%, 5%)`);
  el.style.setProperty("--border-color", `hsl(${color}, 100%, 50%)`);
});

document.querySelectorAll("#content img").forEach(function (el) {
  var color = Math.floor(Math.random() * 360);
  el.style.setProperty("--border-color", `hsl(${color}, 100%, 50%)`);
});
