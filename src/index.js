const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;
  const updateCounter = () => {
    const targetCounter = +counter.getAttribute("data-target");
    const startCounter = Number(counter.innerHTML);
    const incr = targetCounter / 100;
    if (startCounter < targetCounter) {
      counter.innerHTML = `${Math.round(startCounter + incr)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCounter;
    }
  };
  updateCounter();
});
