function updoClock() {
  let now = new Date();
  let clock = document.getElementById("clock");
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updoClock, 1000);
