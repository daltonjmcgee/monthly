function setEventListener() {
  window.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = (centerX - e.clientX) / 150;
    const offsetY = (centerY - e.clientY) / 150;

    const red = document.querySelector(".red");
    const blue = document.querySelector(".blue");
    const green = document.querySelector(".green");

    red.setAttribute(
      "style",
      `animation-name:none;transform:translate(${offsetX}px, ${offsetY}px)`
    );
    blue.setAttribute(
      "style",
      `animation-name:none;transform:translate(${offsetX * -1}px, ${offsetY}px)`
    );
    green.setAttribute(
      "style",
      `animation-name:none;transform:translate(${offsetX}px, ${offsetY * -1}px)`
    );
  });
}

setTimeout(() => setEventListener(), 6500);
