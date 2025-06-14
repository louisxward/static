(function () {
  let hue = 0;
  const saturation = 100;
  const lightness = 50;
  const updateInterval = 300; // in milliseconds

  function updateColor() {
    hue = (hue + 1) % 360;
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    document.documentElement.style.setProperty("--rotating-color", color);
  }

    const originalTitle = document.title;
    awayTitle = "Hey, come back!";

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        document.title = awayTitle;
      } else {
        document.title = originalTitle;
      }
    });

  setInterval(updateColor, updateInterval);
})();
